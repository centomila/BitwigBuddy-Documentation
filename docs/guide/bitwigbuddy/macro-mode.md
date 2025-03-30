# Macro Mode

Macro Mode allows you to automate sequences of actions in Bitwig Studio, combining both native Bitwig commands and BitwigBuddy's custom functions.

![Macro Mode Panel](/images/Macro-Mode.png)

## What is a Macro?

Macros in BitwigBuddy automate sequences of native Bitwig actions combined with custom commands, streamlining complex or repetitive tasks. Bitwig Actions correspond almost entirely to the list of Bitwig keyboard shortcut commands, including the not mapped ones.

## User Interface

### Macro Panels

#### Macro Slots (1-4)

Macros stored in the `BitwigBuddy/Macros` folder:

- **Show Slots**: Change slot view, switch to Instant Macro mode or hybrid mode
- **Select Macro**: Choose a macro sequence to execute
- **Open Macro File**: Open the selected macro file in your default text editor
  - You can edit your file and save it to apply changes without restarting BitwigBuddy
- **Macro Description**: Shows the description of the selected macro
- **Macro Author**: Shows the author of the selected macro
- **Execute Macro**: Run the selected macro
- **Stop All Macros**: Stop the execution of all running macros

<!-- ![Macro Show Slot Compact](/images/Macro-Show-Slot-Compact.png) -->

![Macro Show Slot All](/images/Macro-Show-Slot-All.png)

#### Instant Macro Mode

Define up to 8 quick-execute actions:

- **Instant Macro Field**: Enter custom commands for quick execution
- **Action Buttons 1-8**: Execute corresponding instant macro command
- **Save Instant Macros**: Store your current instant macro setup
- **Load Instant Macros**: Recall previously saved instant macro configurations

![Macro Instant Macro](/images/Macro-Instant-Macro.png)

### Panel Modes

BitwigBuddy Panel offers different viewing modes:

- **Standard Mode**: Shows all four macro slots with full information
- **Compact Mode**: Displays reduced information for each slot to save screen space
- **Hybrid Mode**: Combines instant macros with regular macro slots
- **Instant Only**: Shows just the instant macro interface for maximum simplicity

## Creating Macros

### Macro File Structure

Macros are stored as `.txt` files in the `BitwigBuddy/Macros` folder. You can organize them into subfolders for better management.

Every macro file begins with metadata:

```
Macro: "My Example Macro"
Description: "This is an example macro that creates a drum track"
Author: "Your Name"
```

Following the metadata, each line contains a command to be executed:

```
Macro: "Create Drum Track"
Description: "Creates a new track with Drum Machine"
Author: "BitwigBuddy User"

Create Instrument Track
Track Rename("Drums")
Insert Device("Drum Machine")
Wait(500)
Select Drum Pad("C1")
Insert Device("Kick V4")
```

## Macro Syntax

Macros follow these syntax rules:

- Commands are case-sensitive
- Many commands require parameters in parentheses
- Parameters can be:
  - Strings: `"This is a string"`
  - Integers: `-1, 0, 1, 2, 3`
  - Floats: `-2.5, 0.0, 1.2, 420.42`
  - Booleans: `true/false`
- Comments start with `//` and are ignored during execution
- Some actions require the correct Bitwig view to be in focus
- To automatically close the BitwigBuddy Panel, use the command `Full screen`

## Variables and Loops

BitwigBuddy macros support variables and loops for more advanced automation:

### Variables

Define and use variables throughout your macro:

```
var clipLength = 4
var trackName = "Drums"
var basePosition = 2

// Use variables in commands with ${varName}
Clip Create(${basePosition}, ${clipLength})
Track Rename(${trackName})
```

### For Loops

Repeat commands with an incrementing counter:

```
// Basic for loop syntax
for (i = 1 to 4) {
    Clip Create(${i}, 4)
    Clip Color("#FF0000")
}
```

### Math Expressions

Perform calculations within variable references:

```
var baseLength = 2

// Create clips with increasing lengths
for (i = 1 to 8) {
    // Create clip where position = i, length = i * baseLength
    Clip Create(${i}, ${i*baseLength})
}
```

Supported operators: 
- Addition: `+`  
- Subtraction: `-`
- Multiplication: `*`
- Division: `/`

### Nested Loops

Loops can be nested for more complex patterns:

```
// Create a drum grid across multiple tracks and positions
var baseNote = 36
for (track = 1 to 4) {
    Track Select(${track})
    for (pos = 1 to 8) {
        Clip Create(${pos}, 1)
        Step Selected Velocity(${80 + track*10})
        Step Selected Note(${baseNote + track*4})
    }
}
```

## Tips for Working with Macros

1. **Save your work before running complex macros!** Each action is recorded as an undo step.
2. Make sure opening `{` and closing `}` braces are properly matched in loops
3. Variables defined outside loops are accessible inside loops
4. Loop counter variables are only valid inside their respective loops
5. Use debug mode for troubleshooting: `BB Macro(myMacro, debug)`
6. You can use comments (`//`) both inside and outside loops

## Available Actions

Macros can use two types of actions:

1. **Bitwig Native Actions**: All actions available in Bitwig's keyboard shortcuts system
   - See the [Bitwig Actions Reference](/guide/bitwig-actions) for a complete list

2. **BitwigBuddy Custom Actions**: Special operations provided by BitwigBuddy
   - See the [BitwigBuddy Actions Reference](/guide/bitwigbuddy-actions) for a complete list

## Example Macros

Here's a simple example that creates a drum track with four pads:

```
Macro: "Simple Drum Setup"
Description: "Creates a new track with a Drum Machine and four basic pads"
Author: "BitwigBuddy User"

Create Instrument Track
Track Rename("Basic Drums")
Insert Device("Drum Machine")

// Add four drum pads with basic devices
Select Drum Pad("C1")
Insert Device("Kick V4")

Select Drum Pad("D1")
Insert Device("Snare V4")

Select Drum Pad("F#1")
Insert Device("Hat V4")

Select Drum Pad("A#1")
Insert Device("Clap V4")
```

## Sharing Macros

The BitwigBuddy community benefits from shared macros! Consider sharing your useful macros on:
- The GitHub repository as examples
- Community forums and discussions
- Social media with other Bitwig users

When sharing macros, always include clear descriptions and comments to help others understand how they work.
