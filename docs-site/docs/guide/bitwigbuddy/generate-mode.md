# Generate Mode

Generate Mode is the heart of BitwigBuddy, allowing you to quickly create drum patterns, rhythmic sequences, and musical phrases.

![Generate Mode Panel](../../../GenerateEditMacro.png)

## Mode Selection

First, ensure Generate Mode is selected from the mode selector at the top of the panel.

## Common Controls

These controls are available in both Preset and Program modes:

### Destination
- **Launcher**: Generated pattern is placed in the Clip Launcher view
- **Arranger**: Generated pattern is placed on the arranger timeline

### Replace/Add Pattern
- **Replace**: Overwrites existing notes completely
- **Add**: Adds generated pattern to existing notes (great for layering)

### Reverse Pattern
- **Normal**: Plays pattern as saved
- **Reverse**: Plays pattern in reverse order for creative variations

### Repeat Pattern X Times
- Repeat the pattern X times (1 to 8 times)
- Default: 1
- Example: If a pattern is 16 steps and you set Repeat Pattern to 2, the pattern will be 32 steps long
- Max 128 steps! If the pattern is longer than 128 steps, it will be truncated

## Preset Mode

Preset Mode uses predefined pattern templates from the unified preset system introduced in version 1.0.0.

### Selecting Presets
1. Choose "Preset" from the Pattern Type selector
2. Browse through the preset list to select a pattern (includes both built-in and custom presets)
3. The pattern's step data will be displayed in the UI

### Note Destination
- Set the MIDI note or drum pad for the pattern
- Use the Note selector to choose the note and octave
- Or use "Learn Note" to capture a played note:
  - Select "LN" to learn from any played note
  - Select "DM" to learn from clicked drum pads

### Step Size & Length
- **Step Size**: Sets the rhythmic grid for the pattern
- **Subdivisions**: Choose Straight, Triplets, Quintuplets, or Septuplets
- **Note Length**: Sets the duration of each generated note

## Program Mode

Program Mode gives you control over semi-random pattern generation.

### Controls
- **Steps**: Shows the generated step sequence
- **Velocity Range**:
  - **Min Velocity**: Minimum note velocity (1-127)
  - **Max Velocity**: Maximum note velocity (1-127)
- **Velocity Shape**: Distribution method (Random, Linear, Arc, Sine, etc.)
- **Density**: Frequency of notes occurrence (0% to 100%)
- **Step Quantity**: Number of generated steps (1-128)
- **Skip Step Every X**: Skip steps systematically:
  - Example: Density 100%, Skip Step Every X at 1 → Skips all odd-numbered steps
  - Example: Density 100%, Skip Step Every X at 2 → Skips all even steps
  - Example: Density 100%, Skip Step Every X at 3 → Skips every third step

### Velocity Shapes
BitwigBuddy offers a wide variety of velocity shapes:

- **Random**: Completely random velocities
- **Flat**: All notes have the same velocity (Min Velocity value)
- **Linear Inc/Dec**: Linear increase/decrease from Min to Max or Max to Min
- **Ease Curves**: Various easing functions for natural-feeling dynamics
- **Alternating**: Alternates between Min and Max velocities
- **Wave Forms**: Sine, Cosine, Triangle, Square, Saw patterns

## Post Actions

After generating a pattern, you can trigger additional actions:

- **Duplicate Clip**: Creates a copy of the generated clip (Clip Launcher only)
- **Launch Clip**: Automatically plays the newly generated clip
- **Switch to Edit View Layout**: Changes Bitwig interface to Edit View after generation
- **Zoom To Fit**: Automatically zooms to show the entire pattern

## Custom Preset Creation

You can save your patterns as presets that will appear alongside the built-in ones:

1. Create a pattern you like
2. Click "Save Custom Pattern"
3. Enter a name for your preset
4. The preset will be saved as a .txt file in the Custom Presets folder

For more details on the preset system, see the [Presets System](/guide/bitwigbuddy/custom-presets) page.

## Tips & Ideas

- Rapidly browse presets for quick inspiration
- Reverse patterns for creative rhythmic results
- Use "Add Pattern" with low density to create variations
- Try different velocity shapes to enhance groove
- Use Skip Step creatively for unique rhythmic variations
- Save generated patterns as custom presets for reuse
- Combine multiple patterns by using "Add Pattern" repeatedly
- Learn notes directly from drum pads for efficient workflow
