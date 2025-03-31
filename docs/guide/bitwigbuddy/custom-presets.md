# Presets System

As of version 1.0.0, BitwigBuddy features a unified preset system. All presets - both built-in and custom - use the same format and are stored as text files.

## Overview

All presets in BitwigBuddy are stored as simple text files. The built-in presets are located in the `BitwigBuddy/Presets` folder, while your custom presets go in the `BitwigBuddy/Custom Presets` folder. Both use the identical format, making it easy to create, modify, and share patterns.

## Creating Presets

You can create your own presets in two ways:

### Method 1: Save from Generate Mode

1. In Generate Mode (either Preset or Program), create a pattern you like
2. Click the "Save Custom Pattern" button
3. Enter a name for your preset
4. The preset will be saved as a .txt file in the Custom Presets folder

### Method 2: Create Text Files Manually

Create a text file in the `BitwigBuddy/Custom Presets` folder with the following format:

```
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
Preset Name: Four on the Floor
Steps: 127,0,0,0,100,0,0,0,127,0,0,0,100,0,0,0
DefaultNote: "C1"
Note Channel: 1
Step Size: 1/16
Subdivisions: Straight
Note Length: 1/16
```

## Preset Syntax Guidelines

When creating or editing presets, follow these syntax rules to ensure compatibility with BitwigBuddy:

### Correct Syntax Example
```
Name: "Kick Driving 8th Notes"
DefaultNote: "C1"
Pattern: [100, 0, 100, 0, 100, 0, 100, 0, 100, 0, 100, 0, 100, 0, 100, 0]
StepSize: "1/16"
Subdivisions: "Straight"
NoteLength: "1/16"
```

### Incorrect Syntax Examples

1. Missing quotes around string values:
```
Name: Kick Driving 8th Notes
DefaultNote: C1
Pattern: [100, 0, 100, 0, 100, 0, 100, 0, 100, 0, 100, 0, 100, 0, 100, 0]
StepSize: 1/16
Subdivisions: Straight
NoteLength: 1/16
```

2. Pattern not enclosed in brackets:
```
Name: "Kick Driving 8th Notes"
DefaultNote: "C1"
Pattern: 100, 0, 100, 0, 100, 0, 100, 0, 100, 0, 100, 0, 100, 0, 100, 0
StepSize: "1/16"
Subdivisions: "Straight"
NoteLength: "1/16"
```

### Key Points
- **String values** (e.g., Name, DefaultNote, StepSize, Subdivisions, NoteLength) must be enclosed in double quotes (`"`).
- **Pattern values** must be enclosed in square brackets (`[]`) and separated by commas.
- Avoid leaving out quotes or brackets, as this will result in errors when loading the preset.

## Managing Presets

### Folder Location

Built-in presets are stored in the `BitwigBuddy/Presets` folder, and custom presets are stored in the `BitwigBuddy/Custom Presets` folder within your Bitwig Studio Extensions directory:
- **Windows:** `%USERPROFILE%\Documents\Bitwig Studio\Extensions\BitwigBuddy\Presets` and `%USERPROFILE%\Documents\Bitwig Studio\Extensions\BitwigBuddy\Custom Presets`
- **macOS:** `~/Documents/Bitwig Studio/Extensions/BitwigBuddy/Presets` and `~/Documents/Bitwig Studio/Extensions/BitwigBuddy/Custom Presets`
- **Linux:** `~/Bitwig Studio/Extensions/BitwigBuddy/Presets` and `~/Bitwig Studio/Extensions/BitwigBuddy/Custom Presets`

### Refreshing the Preset List

If you add, remove, or modify preset files while BitwigBuddy is running:
1. Click the "Refresh Presets" button in BitwigBuddy
2. The extension will reload with your updated preset list

## Using Presets

Once created, presets appear in the preset selector dropdown:

1. Select "Preset" in the Pattern Type selector
2. Click the dropdown menu to see all available presets
3. Your custom presets will be listed alongside the built-in patterns
4. Select a preset to load its pattern data

## Converting Program Mode Patterns to Presets

You can save patterns created in Program Mode as presets:

1. Configure your pattern in Program Mode
2. The generated step values appear in the Steps field
3. Click "Save Custom Preset" 
4. Enter a name for your preset
5. The pattern is saved as a preset that you can recall later

## Tips for Working with Presets

- Create variations of the same pattern with different velocity shapes or densities
- Organize your presets with descriptive names (e.g., "Kick - Four on the Floor", "Hihat - Offbeat")
- Back up your presets folder periodically
- Share your presets with the BitwigBuddy community
- Experiment with different DefaultNote settings for quick switching between drum elements

## List of Built-in Presets

Here are the built-in presets included with BitwigBuddy. Note that some presets may have identical steps but differ in settings such as DefaultNote, StepSize, Subdivisions, or NoteLength:

### Kicks
- **Kick Triplet Feel 12 Steps** - C1
- **Kick Syncopated (1, & of 2, 3)** - C1
- **Kick Off-Beats (2 and 4)** - C1
- **Kick Half Notes** - C1
- **Kick Four on the Floor** - C1
- **Kick Driving 8th Notes** - C1
- **Kick Dotted 8th Pattern** - C1
- **Kick 1 and 3** - C1

### Snares
- **Snare Only on Beat 2** - C#1
- **Snare Single Hit Half-Time** - C#1
- **Snare Backbeat 2 and 4** - C#1
- **Snare 16th Machine Gun** - C#1
- **Snare 16th Ghost Notes** - C#1

### Closed HiHats
- **HiHat Closed Eighth Notes** - D1
- **HiHat Closed Eighth Accented** - D1
- **HiHat Closed Dotted Eighth** - D1
- **HiHat Closed 32nd Roll** - D1
- **HiHat Closed 16th Notes** - D1
- **HiHat Closed 8th Notes** - D1
- **HiHat Closed Accent on Downbeat** - D1
- **HiHat Closed Quarter Notes** - D1
- **HiHat Closed Off-Beat 8ths** - D1
- **HiHat Closed Triplet Alt Velocity 18 Step** - D1
- **HiHat Closed Triplet Quarter 18 Step** - D1
- **HiHat Closed Triplet Basic 18 Step** - D1
- **HiHat Closed Triplet Accented 18 Step** - D1
- **HiHat Closed Eighth Crescendo** - D1

### Open HiHats
- **HiHat Open Two and Four** - D#1
- **HiHat Open Quarter Notes** - D#1
- **HiHat Open Off-Beat 8ths** - D#1

![Settings From Preset/Custom](/images/Settings-From-Preset-Custom.png)
