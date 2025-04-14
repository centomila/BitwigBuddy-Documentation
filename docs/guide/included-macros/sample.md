# Sample Macros

Sample macros in BitwigBuddy demonstrate a wide range of capabilities and provide useful examples that you can use to learn how to create your own custom macros. These samples showcase various features including loops, variables, conditional logic, clip manipulation, and state information retrieval.

## Available Sample Macros

| Macro Name | Description | Category |
|------------|-------------|----------|
| Rainbow Clip | Creates a sequence of clips with rainbow color gradient | Clip Manipulation |
| Rename Loop Incremental | Demonstrates using loops and variables to rename tracks and clips | Variables & Loops |
| Check Arm Status | Checks if tracks are armed for recording and shows status messages | Conditional Logic |
| Get Functions and Variables | Shows how to use get functions to retrieve project information | State Functions |
| Step Set Loop | Tests the 'Step Set' command using a for loop and math operations | Pattern Creation |
| Export Loop Selection | Sets arranger loop points and triggers audio export | Export Workflow |
| Insert VST3 | Example of inserting VST3 plugins into a track | Device Management |

## Example: Rainbow Clip

The Rainbow Clip macro creates a beautiful sequence of clips with a gradient of colors across the spectrum. This macro demonstrates how to:
- Rename clips with descriptive names
- Set precise clip colors using hexadecimal color codes
- Use clip duplication to create multiple instances
- Create visual organization in your project

```
Macro: "Rainbow Clip"
Descritpion: "Clip Duplicate the selected clip 64 times with rainbow colors"
Author: "Centomila"

BB Close Panel
Wait (100)
Clip Rename (FF0000 - Red)
Clip Color (FF0000)
Clip Duplicate
// ...continues with many color variations...
```

## Example: Using Variables and Loops

The "Rename Loop Incremental" macro demonstrates how to use variables and loops to create and manipulate multiple tracks and clips:

```
Macro: "Rename Loop Incremental"
Description: "Example of using loops and vars to rename tracks and clips."
Author: "Centomila"

// Go to the first track
select_track1

// Set variables
var trackName = "My Track"
var clipLength = 4
var basePosition = 4

// Loop to rename for 8 tracks
for (i=1 to 8) {
    Track Rename ("${trackName} n. ${i}")
    Select next track
}
// ...continues with more loop examples...
```

## Example: Checking Track States

This sample demonstrates how to check the state of tracks and use conditional logic:

```
Macro: "Check Arm Status"
Description: "Check if tracks are armed for recording and show status messages."
Author: "Centomila"

for (i = 0 to 7) {
    if (isCurrentTrackArmed()) {
        Message("${getCurrentTrackName()} is ARMED for recording!")
    }
    
    if (!isCurrentTrackArmed()) {
        Message("${getCurrentTrackName()} IS NOT armed for recording!")
    }
    Track Next
}
```

## Example: Getting Project Information

The "Get Functions and Variables" macro shows how to retrieve information about the current project:

```
Macro: "Get Functions and Variables"
Description: "Examples of get functions."
Author: "Centomila"

// Track and project information example
var trackName = getCurrentTrackName()
Wait (1500)
Message(Current track name is: ${trackName})
// ...continues with more state information retrieval...
```

## Example: Export Automation

The "Export Loop Selection" macro demonstrates how to automate the export process:

```
Macro: "Export Loop Selection"
Description: "Set the Arranger Loop position, go to export page and confirm with last used settings."
Author: "Centomila"

Arranger Loop Start (16.0)
Wait (100)
Arranger Loop End (128.0)
Export Audio
Enter
```

## Creating Your Own Sample Macros

These sample macros are designed to be educational starting points. You can:

1. Copy and modify them to fit your needs
2. Experiment with different combinations of commands
3. Study how loops and variables are used
4. Learn techniques for organizing complex macros

The sample macros demonstrate concrete practical applications of BitwigBuddy's macro system, from simple automation sequences to complex operations with variables and conditions.