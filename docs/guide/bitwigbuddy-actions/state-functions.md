# State Functions and Variables

BitwigBuddy provides a set of functions to retrieve state information from Bitwig Studio. These functions can be used in macros to access information about the current track, device, clip, transport, and more.

## Overview of State Functions

State functions allow you to:
- Get information about the current track (name, number, color, etc.)
- Retrieve details about the current device
- Access clip properties and status
- Check transport settings (BPM, time signature, etc.)
- Get project information

These values can be used in your macros for conditional logic, displaying information, or creating dynamic behaviors.

## Function List

### Track Information

| Function                  | Return Type | Description                                                 |
| ------------------------- | ----------- | ----------------------------------------------------------- |
| `getCurrentTrackName()`   | String      | Gets the name of the currently selected track               |
| `getCurrentTrackNumber()` | Integer     | Gets the position of the current track (1-based index)      |
| `getCurrentTrackColor()`  | String      | Gets the color of the current track as hex code (without #) |
| `isCurrentTrackMuted()`   | Boolean     | Checks if the current track is muted                        |
| `isCurrentTrackSoloed()`  | Boolean     | Checks if the current track is soloed                       |
| `isCurrentTrackArmed()`   | Boolean     | Checks if the current track is armed for recording          |
| `getCurrentTrackVolume()` | Double      | Gets the current track volume (0.0 to 1.0)                  |
| `getCurrentTrackPan()`    | Double      | Gets the current track pan position (-1.0 to 1.0)           |
| `getTrackCount()`         | Integer     | Gets the total number of tracks in the current project      |

### Device Information

| Function                      | Return Type | Description                                           |
| ----------------------------- | ----------- | ----------------------------------------------------- |
| `getCurrentDeviceName()`      | String      | Gets the name of the currently selected device        |
| `isCurrentDeviceEnabled()`    | Boolean     | Checks if the current device is enabled               |
| `isCurrentDeviceWindowOpen()` | Boolean     | Checks if the current device window is open           |
| `getDeviceCount()`            | Integer     | Gets the total number of devices in the current track |

### Clip Information

| Function                   | Return Type | Description                                                |
| -------------------------- | ----------- | ---------------------------------------------------------- |
| `getCurrentClipName()`     | String      | Gets the name of the currently selected clip               |
| `getCurrentClipColor()`    | String      | Gets the color of the current clip as hex code (without #) |
| `isCurrentClipLooping()`   | Boolean     | Checks if the current clip is set to loop                  |
| `getCurrentClipLength()`   | Double      | Gets the length of the current clip in beats               |
| `isCurrentClipPlaying()`   | Boolean     | Checks if the current clip is playing                      |
| `isCurrentClipRecording()` | Boolean     | Checks if the current clip is recording                    |
| `isCurrentClipSelected()`  | Boolean     | Checks if the current clip is selected                     |

### Transport Information

| Function                        | Return Type | Description                                        |
| ------------------------------- | ----------- | -------------------------------------------------- |
| `getCurrentBpm()`               | Double      | Gets the current project tempo in BPM              |
| `getTimeSignatureNumerator()`   | Integer     | Gets the numerator of the current time signature   |
| `getTimeSignatureDenominator()` | Integer     | Gets the denominator of the current time signature |
| `isPlaying()`                   | Boolean     | Checks if transport is currently playing           |
| `isRecording()`                 | Boolean     | Checks if transport is currently recording         |
| `getPlayPosition()`             | Double      | Gets the current play position in beats            |
| `isMetronomeEnabled()`          | Boolean     | Checks if the metronome is enabled                 |
| `isArrangerLoopEnabled()`       | Boolean     | Checks if the arranger loop is enabled             |

### Project Information

| Function           | Return Type | Description                          |
| ------------------ | ----------- | ------------------------------------ |
| `getProjectName()` | String      | Gets the name of the current project |

### Scene Information

| Function                 | Return Type | Description                         |
| ------------------------ | ----------- | ----------------------------------- |
| `getCurrentSceneIndex()` | Integer     | Gets the index of the current scene |
| `getCurrentSceneName()`  | String      | Gets the name of the current scene  |

## Using State Functions in Macros

Here's an example of how to use these functions in a macro:

```
Macro: "Get Functions and Variables"
Description: "Examples of get functions."
Author: "Centomila"

// Track and project information example

// Assign the current track name to a variable
var trackName = getCurrentTrackName()

Wait (1500)
// Show the track name in a message popup
Message(Current track name is: ${trackName})

Wait (1500)
// Get track position (number)
var trackNumber = getCurrentTrackNumber()
Message(Track position: ${trackNumber})

Wait (1500)
// Get device information
var deviceName = getCurrentDeviceName()
Message(Current device: ${deviceName})

Wait (1500)
// Get transport information
var bpm = getCurrentBpm()
Message("Project tempo: ${bpm} BPM")

Wait (1500)
// Time signature information
var num = getTimeSignatureNumerator()
var denom = getTimeSignatureDenominator() 
Message("Time signature: ${num}/${denom}")

// Send information to the console for logging
Console("== Bitwig State Information ==")
Console("Track: ${trackName} (#${trackNumber})")
Console("Device: ${deviceName}")
Console("Tempo: ${bpm} BPM")
Console("Time signature: ${num}/${denom}")
```

## Using Variables in Expressions

You can use these functions directly in expressions or assign them to variables:

```
// Direct use in expressions
Message("Current project: ${getProjectName()}")

// Using variables
var trackName = getCurrentTrackName()
var deviceName = getCurrentDeviceName()
var isArmed = isCurrentTrackArmed()
Message("Track: ${trackName}, Device: ${deviceName}")

// Using in conditional statements
if (${isArmed}) {
    Message("Track is armed for recording!")
}

if (!${isArmed}) {
    Message("Track is NOT armed for recording!")
} 
```

## Notes for Using State Functions

- These functions provide **read-only** access to Bitwig Studio's state
- Values are retrieved at the moment the function is called
- For real-time monitoring, you may need to call these functions periodically