# Installation Guide

Getting BitwigBuddy up and running is quick and easy.

## System Requirements

- Bitwig Studio (latest version recommended)
- Windows, macOS, or Linux operating system

## ⚙️ Installation Steps

1. ⬇️ Download **_BitwigBuddy-1.0.0.zip_** from the [Release page](https://github.com/centomila/BeatBuddy-Bitwig-Extension-MIDI-Drum-Generator/releases)
   - Visit the release page on GitHub and locate the latest version of BitwigBuddy. Click the download link to save the zip file to your computer.

2. 📂 Extract the zip to the **_/Bitwig Studio/Extensions/_** folder. Be sure to extract the BitwigBuddy subfolder as well. It contains sample custom presets as txt files.
   - Use a file extraction tool to unzip the downloaded file. Navigate to the appropriate Extensions folder for your operating system and move the extracted files there.
     - **Windows:** `%USERPROFILE%\Documents\Bitwig Studio\Extensions`
       - If your Documents folder is in OneDrive, it might be in `%USERPROFILE%\OneDrive\Documents\Bitwig Studio\Extensions`
     - **macOS:** `~/Documents/Bitwig Studio/Extensions`
     - **Linux:** `~/Bitwig Studio/Extensions`

3. 🟧 In Bitwig, go to **Settings > Controller > Add Extension > Centomila > BitwigBuddy**
   - Open Bitwig Studio and navigate to the Settings menu. Under the Controller section, click "Add Extension" and select "Centomila" followed by "BitwigBuddy" from the list.

   1. *Navigate to the Controller settings in Bitwig Studio.*
   2. *Click on "Add Controller" to open the list of available extensions.*
      ![Add Controller Step 1](/images/Add-Controller-1.png)

   3. *Select "Centomila" from the list.*
   ![Add Controller Step 2](/images/Add-Controller-2.png)

   4. *Select "BitwigBuddy" from the list to add the extension.*
   ![Add Controller Step 3](/images/Add-Controller-3.png)

4. 🎉 BitwigBuddy should now appear in the Bitwig Studio Controller section

## Verifying Installation

If you don't see the panel, try these troubleshooting steps:

- Make sure you've completely extracted the zip file
- Check that the files are in the correct Extensions directory
- Restart Bitwig Studio
- Check the controller setup in Bitwig's settings

## Folder Structure

BitwigBuddy uses several folders for different purposes:

BitwigBuddy folder structure:

```
📂 Bitwig Studio
├── 📂 Extensions
|  ├──📄 BitwigBuddy.bwextension
|  |  ├── 📂 BitwigBuddy
|  |  │   ├── 📂 Custom Presets
|  |  │   ├── 📂 Macros
```

- 📂 **Custom Presets**: Txt files with pattern presets. You can add your own here.
- 📂 **Macros**: Contains macro script files. You can add your own macros here. Supports subfolders for organization.

All these folders are located within the BitwigBuddy folder in your Extensions directory.
