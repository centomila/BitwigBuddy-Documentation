# Generate Mode

Generate Mode is the core feature of BitwigBuddy, allowing you to create drum patterns quickly and efficiently.

## Overview

Generate Mode provides two approaches for pattern creation:

1. **Preset Mode**: Select from predefined rhythmic and melodic patterns
2. **Program Mode**: Create semi-random patterns with customizable parameters

![Generate Mode Panel](../../../GenerateEditMacro.png)

## Common Controls

These controls apply to both Preset and Program modes:

- **Generate/Edit/Macro Mode:** Set this to "Generate" to create patterns.
- **Destination:**
  - **Launcher:** Generated pattern is placed in the Clip Launcher view.
  - **Arranger:** Generated pattern is placed on the arranger timeline.
- **Replace/Add Pattern:**
  - **Replace:** Overwrites existing notes completely.
  - **Add:** Adds generated pattern to existing notes.
- **Reverse Pattern:**
  - **Normal:** Plays pattern as saved.
  - **Reverse:** Plays pattern in reverse order.
- **Repeat Pattern X Times:**
  - Repeat the pattern X times (1 to 8 times)
  - Default: 1
  - Example: If a pattern is 16 steps and you set Repeat Pattern to 2, the pattern will be 32 steps long.
  - Note: Max 128 steps! If the pattern is longer than 128 steps, the pattern will be truncated to 128 steps.

## 1️⃣ Preset Mode

Preset Mode gives you access to numerous predefined rhythmic and melodic patterns for quick pattern generation.

### Preset Mode Controls

- **Preset/Program:** Set this to "Preset" to select from predefined patterns.
- **Preset Selector:** Choose from a variety of built-in patterns or your custom presets.
- **Step Size:** Rhythmic value of each step.
- **Subdivisions:** Rhythm subdivisions (Straight, Triplets, Quintuplets, Septuplets).
- **Note Length:** Length of each generated note.
- **Note Channel:** MIDI channel for generated notes.
- **Note Destination:** Select the note pitch for your pattern (e.g., "C1" for kick drum).

### Post-Actions

BitwigBuddy offers several actions that can be performed automatically after generating a pattern:

- **Duplicate Clip**: Creates a copy of the generated pattern (Clip Launcher mode only)
- **Launch Clip**: Automatically plays the newly generated clip
- **Switch to Edit View Layout**: Changes the Bitwig interface to the Edit View after generation
- **Zoom To Fit**: Automatically zooms to show the entire pattern

## 🎲 Program Mode

Program Mode allows for semi-random pattern generation with fine control over various parameters.

### Program Mode Controls

- **Pattern Type:** Select "Program" for semi-random patterns.
- **Steps:** Shows the generated step sequence as values.
- **Velocity Range:**
  - **Min Velocity:** Minimum note velocity (1-127).
  - **Max Velocity:** Maximum note velocity (1-127).
- **Velocity Shape:** Choose from numerous distribution methods:
  - Random
  - Flat (Value by Min Velocity)
  - Linear Inc/Dec
  - Ease Out/In Cubic Inc/Dec
  - Ease InOut Inc/Dec
  - Arc
  - Sine, Cosine, Double Cosine
  - Alternating patterns
  - Saw, Triangle, Square variations
- **Density:** Frequency of notes occurrence (0% to 100%).
- **Step Quantity:** Number of generated steps (1-128).
- **Skip Step Every X:** Skip steps systematically:
  - Example: Density 100%, Skip Step at 1 → Skips all odd-numbered steps.
  - Example: Density 100%, Skip Step at 2 → skips every third step, focusing on positions 1, 2, 4, 5, etc.

### Save Custom Presets

You can save both Preset and Program patterns as custom presets:

1. Configure your pattern parameters
2. Click the "Save Custom Preset" button
3. Enter a name for your preset
4. The preset will be saved as a .txt file in the BitwigBuddy/Custom Presets folder
5. Your custom preset will appear in the preset selector

## Tips & Techniques

- **Quick Inspiration**: Rapidly browse presets to find a starting point for your drum patterns
- **Pattern Variation**: Use the "Reverse Pattern" option to create variations of existing patterns
- **Layered Patterns**: Use "Add Pattern" mode to layer different patterns on the same note
- **Pattern Evolution**: Set a low density in Program Mode and duplicate the clip several times, with each one having slight variations
- **Learn Note from Drum Pads**: Select "DM" from the Learn Note selection and click on a drum pad to set the note destination
