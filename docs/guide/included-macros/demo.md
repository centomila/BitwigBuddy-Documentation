# Demo Macros

Demo macros showcase the capabilities of BitwigBuddy's macro system through a sequence of interconnected macros. This demo is designed to walk you through BitwigBuddy's features in an empty project, highlighting the power of macro chaining and automation.

## About the Demo Sequence

The demo is structured as a step-by-step walkthrough that:
- Demonstrates how to chain macros together
- Shows various BitwigBuddy capabilities
- Creates tracks, patterns, and arrangements automatically
- Manipulates the Bitwig project in real-time

This sequence is meant to be run on an empty project, as it will make significant changes to demonstrate BitwigBuddy's capabilities.

## Available Demo Macros

| Macro Name | Description | Function |
|------------|-------------|----------|
| 1-Demo | Entry point for the demo sequence | Starts the demo with an introduction |
| 2-Demo | Countdown and preparation | Sets up the context with a countdown |
| 3-Demo | Track and arrangement setup | Creates tracks and adds arrangement markers |
| 4-Demo | Device insertion and pattern creation | Adds instruments and creates patterns |
| 5-Demo | Selection operations and audio processing | Demonstrates zooming and audio manipulation |
| 6-Demo | Clip operations and finalization | Creates clips and finalizes the demo |

## How to Run the Demo

To experience the full demo:

1. Create a new empty project in Bitwig Studio
2. Open BitwigBuddy and select the Macro mode
3. Navigate to the Demo section
4. Select and run the "1-Demo" macro
5. Sit back and watch as BitwigBuddy automatically walks through its capabilities

## Example: Demo Start Sequence

The demo begins with a simple greeting and then chains to the next macro:

```
Macro: "1-Demo"
Description: ""
Author: "Centomila"

Message ("Hello!")
Wait(2000)
Macro ("Demo/2-Demo")
```

The second part continues with a countdown:

```
Macro: "2-Demo"
Description: ""
Author: "Centomila"

Message ("This is a Bitwig Buddy Macro")
Wait (3000)
Message ("Now I will mess up with this project to show you what I can do")
Wait (3000)
Message ("You have 5 seconds to stop me")
Wait (1000)
Message ("5")
Wait (1000)
Message ("4")
Wait (1000)
Message ("3")
Wait (1000)
Message ("2")
Wait (1000)
Message ("1")
Wait (1000)
BB Close Panel
Macro ("Demo/3-Demo")
```

## Project Setup and Track Creation

In part 3, the demo creates tracks and adds arrangement markers:

```
Macro: "3-Demo"
Description: ""
Author: "Centomila"

Message ("First, we need some tracks...")
Track Select (1)
Wait (1500)
focus_track_header_area
Wait (500)
Macro ("Create 8 Tracks")
Wait (1500)
Message ("Much better!")
Wait (1500)
Message ("Now let's add some cue markers")
Wait (1500)
Macro ("Arrangement/Arrangement - Melodic Techno Original Mix")
Wait (1500)
Message ("Zoom to Fit the arranger...")
arranger_zoom_to_fit
Wait (3000)
Macro ("Demo/4-Demo")
```

## Pattern Creation and Device Insertion

Part 4 demonstrates adding devices and creating patterns:

```
Macro: "4-Demo"
Description: "Demonstrates track selection, device insertion, and clip creation."
Author: "Centomila"

Track Select (2)
Insert Device ("Drum Machine")
Wait (300)
Message ("This Drum Machine needs a kick")
BB Close Panel
Drum Pad Insert Device ("C1", "V0 Kick")
Wait (1500)
Message ("Let's create a clip in the Arranger")
BB Arranger Mode
focus_or_toggle_arranger
toggle_clip_launcher
Down
Wait (100)
move_time_selection_one_step_later

Clip Create (0, 1)
Wait (1200)
switch_between_event_and_time_selection
Message ("We need some notes")
Wait (1500)
Wait (100)
BB Preset ("Kick Four on the Floor")
BB Pattern Repeat (8)
BB Post Action AutoResize ("Off")
BB Generate
Wait (1000)

Macro ("Demo/5-Demo")
```

## Audio Processing and Final Operations

The demo concludes with audio processing, clip operations, and a farewell message:

```
Macro: "6-Demo"
Description: "Final part of the demo sequence with clip creation and selection."
Author: "Centomila"

switch_between_event_and_time_selection
Right
Down
Track Select (2)
move_time_selection_one_event_earlier
Clip Create (1, 4)
Wait (200)
Clip Select
Message ("Weeeeeeeeeeeeeee!")
Macro ("Samples/Rainbow Clip")
Select All
zoom_to_fit_selection_or_all
Stop Transport
Wait (1000)
Message ("End of demo!")
Wait (2000)
Message ("Bye bye!")
```

## Understanding Macro Chaining

This demo sequence illustrates one of BitwigBuddy's most powerful features: the ability for macros to call other macros. This allows for:

1. **Modular Design**: Break complex tasks into smaller, reusable macros
2. **Sequential Automation**: Execute a series of operations in sequence
3. **Conditional Execution**: Call different macros based on conditions
4. **Reuse of Common Functions**: Create utility macros that can be called from multiple places

By studying this demo sequence, you can learn techniques for creating your own sophisticated macro chains for your specific production workflows.