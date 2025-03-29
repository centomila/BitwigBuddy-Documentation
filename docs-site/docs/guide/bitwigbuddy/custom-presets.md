# Custom Presets

BitwigBuddy allows you to create and save your own pattern presets for reuse across projects. This guide explains how to create, manage, and use custom presets.

## Overview

Custom presets in BitwigBuddy are stored as simple text files in the `BitwigBuddy/Custom Presets` folder. These files contain the pattern data, default note values, and other information needed to recreate your patterns.

## Creating Custom Presets

There are two ways to create custom presets:

### Method 1: Save from Generate Mode

1. Configure a pattern in Generate Mode (using either Preset or Program mode)
2. Click the "Save Custom Preset" button
3. Enter a name for your preset
4. Your pattern is saved as a `.txt` file in the BitwigBuddy/Custom Presets folder

### Method 2: Create a Text File Manually

You can create custom preset files directly in a text editor. The preset format follows this syntax:

```
# Custom Preset Example
Preset Name: MyCustomPreset
Steps: 80,0,80,0,80,0,80,0
DefaultNote: "C#1"
Note Channel: 1
Step Size: 1/16
Subdivisions: Straight
Note Length: 1/16
```

## Preset File Settings Explained

- **Preset Name:** The display name shown in BitwigBuddy's preset selector
- **Steps:** Comma-separated velocity values (0-127), where 0 means no note
- **DefaultNote:** Sets the default MIDI note and octave (e.g., "C#1")
- **Note Channel:** MIDI channel for generated notes
- **Step Size:** Rhythmic value of each step
- **Subdivisions:** Rhythm subdivisions (Straight, Triplets, Quintuplets, Septuplets)
- **Note Length:** Length of each generated note

## Example Custom Preset

Here's an example of a simple kick pattern on every quarter note:

```
# Simple Kick Pattern
Preset Name: Four on the Floor
Steps: 127,0,0,0,100,0,0,0,127,0,0,0,100,0,0,0
DefaultNote: "C1"
Note Channel: 1
Step Size: 1/16
Subdivisions: Straight
Note Length: 1/16
```

## Managing Custom Presets

### Folder Location

Custom presets are stored in the `BitwigBuddy/Custom Presets` folder within your Bitwig Studio Extensions directory:
- **Windows:** `%USERPROFILE%\Documents\Bitwig Studio\Extensions\BitwigBuddy\Custom Presets`
- **macOS:** `~/Documents/Bitwig Studio/Extensions/BitwigBuddy/Custom Presets`
- **Linux:** `~/Bitwig Studio/Extensions/BitwigBuddy/Custom Presets`

### Refreshing the Preset List

If you add, remove, or modify custom preset files while BitwigBuddy is running:
1. Click the "Refresh Custom Presets" button in BitwigBuddy
2. The extension will reload with your updated custom preset list

## Using Custom Presets

Once created, custom presets appear in the preset selector dropdown along with the built-in presets:

1. Select "Preset" in the Pattern Type selector
2. Click the dropdown menu to see all available presets
3. Your custom presets will be listed alongside the built-in patterns
4. Select a custom preset to load its pattern data

## Converting Program Mode Patterns to Presets

You can save patterns created in Program Mode as custom presets:

1. Configure your pattern in Program Mode
2. The generated step values appear in the Steps field
3. Click "Save Custom Preset" 
4. Enter a name for your preset
5. The pattern is saved as a custom preset that you can recall later

## Tips for Working with Custom Presets

- Create variations of the same pattern with different velocity shapes or densities
- Organize your presets with descriptive names (e.g., "Kick - Four on the Floor", "Hihat - Offbeat")
- Back up your custom presets folder periodically
- Share your custom presets with the BitwigBuddy community
- Experiment with different DefaultNote settings for quick switching between drum elements
