# BitwigBuddy Changelog

This page documents all notable changes to BitwigBuddy.

## Upcoming in 1.0.0 (Pre-release)

*These features are available only via source code*

- 📙 **Manual**
  - The manual is available online at [bitwigbuddy.centomila.com](https://bitwigbuddy.centomila.com)
- 🦘 **Skip Step Every X** in Program Mode
  - Skip a step every X steps
  - Example: Set Density at 100% and Skip Step Every X at 1 to create a 50% density pattern skipping all odd steps
  - Example: Set Density at 100% and Skip Step Every X at 2 to create a 50% density pattern skipping all even steps
  - Example: Set Density at 100% and Skip Step Every X at 3 to skip every third step in a pattern
- 🥁 **Learn Note from selected drum pad**
  - Select _DM_ from the _Learn Note_ selection and click on a drum pad to set the note destination
  - Works on any Bitwig Drum Machine device in tracks from 1 to 128
- 🪢 **Presets and Custom are a single thing now**
  - All default presets are txt files like the Custom Presets folder
- ➕ **Replace/Add Toggle**
  - Instead of erasing the current pattern, the new pattern is added to the existing pattern
  - Try with program on low density + Post Action Duplicate Clip for interesting results
- 🔁 **Repeat Pattern X Times**
  - Repeat the pattern X times (1 to 8 times)
  - Default: 1
  - Example: If a pattern is 16 steps and you set Repeat Pattern to 2, the pattern will be 32 steps long
  - Note: Max 128 steps! If the pattern is longer than 128 steps, it will be truncated
- 💾 **Save Custom Presets**
  - Save the current pattern as a custom preset
  - The custom presets are stored in the Custom Presets folder as .txt files
  - The custom presets can be selected from the Custom Preset dropdown
- 💾 **Save Custom Pattern from Program Mode**
  - Now it's easy to save the current pattern as a custom preset when in Program mode
- 🥁 **New Default Patterns**
  - 35 new patterns fully customizable from txt files
- 💻 **Open Bitwig Console** button
  - Open the Bitwig Console from the BitwigBuddy Settings
- 👁️ **Show Advanced GPU Settings** button
  - This is a hidden Bitwig Setting for changing GPU settings
  - Useful for visual artifacts or performance issues
- 🤖 **Macros System**
  - Execute pre-defined sequences of actions using macros
  - Automate multiple sequence of actions like: Insert a Drum Machine, Insert a Midi File, Insert a Sample, Add Cue Markers, Rename Clips, Change Colors, Duplicate, Cursor Keys
  - Loop an action multiple times
  - Call a macro from another macro
  - Macros are stored as .txt files
  - Complete list of available actions in the manual

## 0.9.8 beta (Current Release)

- Fixed bug when using _Duplicate Clip_ and _Launch Clip_ together as Post Actions
  - Now the duplicated clip is the one launched

## 0.9.8 alpha

- Fixed bug with Custom Presets folder. Thanks @Cris--!

## 0.9.7

Edit mode is here! 🥳

- BeatBuddy becomes BitwigBuddy
- _Random_ became _Program_
- New velocity shapes:
  - Complete list: "Random", "Flat (Value by Min Velocity)", "Linear Inc", "Linear Dec", "Ease Out Cubic Inc", "Ease In Cubic Inc", "Ease Out Cubic Dec", "Ease In Cubic Dec", "Ease InOut Inc", "Ease InOut Dec", "Arc", "Sine", "Cosine", "Double Cosine", "Alternate Min Vel and High Vel", "Alternate High and Min Vel", "Saw 2 Inc", "Saw 2 Dec", "Saw 3 Inc", "Saw 3 Dec", "Saw 4 Inc", "Saw 4 Dec", "Triangle", "Square Inc", "Square Dec", "Square 2 Inc", "Square 2 Dec", "Square 3 Inc", "Square 3 Dec", "Square 4 Inc", "Square 4 Dec"
- New Generate/Edit selector
  - In Edit mode, you can apply a velocity shape to the selected steps
  - If no steps are selected, nothing happens
- Custom presets now load the default note
  - Add a row with _DefaultNote: "D#1"_ to automatically assign that note when the custom preset is selected
- Custom preset folder moved from _Extensions/BeatBuddy_ to _Extensions/BitwigBuddy/Custom Presets_
- Added a _Refresh Custom Presets_ button
  - This button restarts the extension with the updated custom preset list
- Post Action: _Switch to Edit View Layout_
  - When enabled, your view automatically changes to the Edit View Layout after pattern generation
  - Default: Off
- Preferences: _Show Channel Destination Selector_
  - If enabled, shows the Note MIDI Channel destination (Default: Enabled)
  - When this setting is disabled, the MIDI Channel destination is always 1

## 0.9.0

Another big update! 🎉

- Clear Current Note Destination
  - Button to clear the current note destination
  - Useful for emptying note lane without generating a new pattern
- Customizable Random pattern
  - Text field showing generated steps as comma-separated numbers
  - Min Velocity: Minimum velocity for generated steps (1-127, default 1)
  - Max Velocity: Maximum velocity for generated steps (1-127, default 127)
  - Density: How many steps generated in pattern (1-100%, default 50%)
    - 50% means 8 steps in a 16 steps pattern
    - 100% means 16 steps in a 16 steps pattern
  - Steps Quantity: Minimum number of steps in pattern (1-128, default 16)
  - Various Velocity Shapes:
    - Random, Flat, Linear, Arc, Sine, Cosine, etc.

## 0.8.0

Biggest update so far! 🎉

- Added Pattern Type Selector:
  - Preset Patterns (Default)
  - Random Patterns
  - Custom Patterns
- Custom patterns in txt format
- Pattern content displayed and editable in UI
- Learn Note button to automatically set note destination
- POST Actions
  - Automatically Zoom To Fit
  - Automatically duplicate clip after generation
- Support section in Preferences

## 0.7.6 - 0.7.0

- Code refactoring
- Added rotate patterns
- Improved step movement buttons
- Fixed Quintuplets (5t) and Septuplets (7t)
- Added 1/1 step size/note length
- Added "Move Steps" button
- Added "Reverse Pattern" checkbox

## 0.6.2 - 0.5.0

- Link to GitHub project
- Support for Quintuplets (5t) and Septuplets (7t)
- Added more patterns
- Support for dotted notes
- Note length automatically follows step size
- Clip automatically resized to match pattern length
- Button to clear clip completely
- Improved note destination selection

## 0.4.5 - 0.4.0

- Support for clip in arranger
- Separated fields for changing note destination
- Added Show/Hide button for note destination fields
- Removed GMDrums as default note destination selector
- Moved Generate button to top of UI
- Code refactoring
- Added Random pattern
