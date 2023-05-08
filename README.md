![drizzy](drizzy.jpg)
![kdot](kdot.jpg)

Creating the exhibit requires a couple of steps. The first is to download the Arduino software, in my case, <br>
        I needed to download the Legacy version, an older version of the software. Once it is downloaded and running, <br>
        go to file->preferences and then enable the esp32 board by inserting this url where it says additional boards manager: <br>
        <a href="https://dl.espressif.com/dl/package_esp32_index.json">https://dl.espressif.com/dl/package_esp32_index.json</a><br>
        <br>
        Then go to Tools->Boards->ESP32 Arduino and select TTGO T1. In order to select a port, make sure that the ESP32 <br>
        is connected to the your machine using a data transfer USB-C cable. In my case, I needed to download <a href="http://www.wch.cn/downloads/CH34XSER_MAC_ZIP.html">this driver</a> <br>
        and reset my machine in order to get the code to load on my ESP32. <br>
        <br>
        For those that also need to download the driver, select the port /dev/cu.wchusbserial.<br>
        <br>

        It is also required to install the TFT_eSPI library by Bodmer. This can be done by going to Tools->Library Manager. <br>
        <br>

        All of files required to recreate experience (listed below) can be found in this <a href="https://github.com/aot2109/Module1">Git Repository</a> <br>
        
        "music.js" 
        "index.html"
        "joystick.ino"

        joystick.ino was sourced directly from "Freenove Ultimate Starter Kit For ESP32" <br>
        <br>
        music.js was heavily sourced from http://www.marksantolucito.com/COMS3430/fall2022/delay/ <br>
        and http://www.marksantolucito.com/COMS3430/fall2022/3dpanning which were recommended to me <br>
        by fellow classmate Nicholas Denton-Cheng. I also referenced some of Nick's code for his <br>
        Module 2 (with his permission of course) when I realized we had similar project ideas.
    </p>