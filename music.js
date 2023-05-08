var audioCtx = new AudioContext();


sampleList = ['Cole', 'Kendrick', 'Drake', 'Barb']
panners = new Map()
spMap = new Map()
startingPositions = [[0.1,0.1], [-100,0.1],[-200,0.1],[-300,-0.1]]
const globalGain = audioCtx.createGain(); //this will control the volume of all notes
globalGain.gain.setValueAtTime(0.1, audioCtx.currentTime)
globalGain.connect(audioCtx.destination);

async function loadBuffer(bufferURL) {
  //better to have a try/catch block here, but for simplicity...
  const response = await fetch(bufferURL);
  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
  return audioBuffer;
}
window.addEventListener('keydown', keyDown, false);
  function keyDown(event) {
    const key = (event.detail || event.which).toString();
    if(key == '65'){
      x--;
    }else if(key == '68'){
      x++;
    }
    console.log('x: ' +x)
}
const playButton = document.querySelector('#playButton');

playButton.addEventListener('click', async function () {
 
  const move = () => {
    const later = audioCtx.currentTime + 0.016; 
    for(const [sample, panner] of Object.entries(panners)){
      panner.positionX.value =spMap[sample][0] -x;
    }
    requestAnimationFrame(move);
  };


  for(let i=0; i<sampleList.length; i++){
    const source = audioCtx.createBufferSource();

    panners[sampleList[i]] = new PannerNode(audioCtx)
    panners[sampleList[i]].panningModel='HRTF'
    panners[sampleList[i]] .positionX.value = startingPositions[i][0]
    spMap[sampleList[i]] = startingPositions[i]
    samplePath = './samples/' + sampleList[i] + '.mp3'
    var audioBuffer = await loadBuffer(samplePath);
    source.connect(panners[sampleList[i]]).connect(audioCtx.destination);
    source.buffer = audioBuffer;
    source.start();

  }
  
  move();

});