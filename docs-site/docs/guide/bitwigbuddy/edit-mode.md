# Edit Mode

Edit Mode allows you to modify the velocities and other properties of existing MIDI patterns in Bitwig Studio, making it easy to humanize patterns or adjust their feel.

![Edit Mode Panel](../../../GenerateEditMacro.png)

## Overview

When working with MIDI patterns in Bitwig Studio, you often need to adjust the velocities of notes to create more dynamic and human-feeling rhythms. The Edit Mode in BitwigBuddy provides powerful tools to accomplish this quickly.

## Using Edit Mode

1. First, select the notes you want to modify in the Bitwig Studio MIDI editor
2. Switch to "Edit" in the Generate/Edit/Macro selector in BitwigBuddy
3. Configure your velocity settings
4. Click "Update Selected Steps Velocity" to apply the changes

## Edit Panels Explained

### Main Controls

- **Update Selected Steps Velocity:** Applies velocity changes to the selected notes based on your settings
- **Clear Current Clip/Note Destination:** Removes all notes from the current clip or specific note lane

### Velocity Settings

- **Velocity Range:**
  - **Min Velocity:** The minimum velocity value (1-127) that will be applied
  - **Max Velocity:** The maximum velocity value (1-127) that will be applied

- **Velocity Shape:** Determines how velocity values are distributed across the selected notes
  - **Random:** Each note gets a random velocity between Min and Max
  - **Flat (Value by Min Velocity):** All notes get the Min Velocity value
  - **Linear Inc:** Velocity increases linearly from Min to Max
  - **Linear Dec:** Velocity decreases linearly from Max to Min
  - **Ease Out/In Cubic Inc/Dec:** Various cubic curve shapes for velocity distribution
  - **Ease InOut Inc/Dec:** Smooth S-curve velocity distribution
  - **Arc:** Bell-shaped velocity curve
  - **Sine/Cosine/Double Cosine:** Waveform-based velocity distributions
  - **Alternating patterns:** Alternates between Min and Max velocities
  - **Saw/Triangle/Square variations:** Various geometric patterns for velocity distribution

## Tips & Techniques

- **Humanization:** Use Random velocity shape with a moderate range (e.g., 80-100) to create natural-feeling variations
- **Accents:** Use Alternating patterns to create strong beat emphasis
- **Crescendos:** Use Linear Inc to build intensity throughout a section
- **Fades:** Use Linear Dec to create diminishing intensity
- **Groove:** Apply different velocity shapes to different drum elements (e.g., higher velocities on downbeats)
- **Quick A/B testing:** Make a selection, apply changes, then use Bitwig's undo/redo to compare different velocity shapes

## Workflow Example

1. Create a basic drum pattern using Generate Mode
2. Switch to Edit Mode
3. Select just the hi-hat notes in the pattern
4. Apply a Random velocity shape with range 60-90 to add natural variation
5. Select just the kick and snare notes
6. Apply a different velocity shape (like Alternating or Arc) to emphasize key beats
7. Use Bitwig's undo/redo to compare and refine until you achieve the desired feel

Remember that Edit Mode only affects notes that are currently selected in the Bitwig Studio MIDI editor. If no notes are selected, no changes will be made when clicking "Update Selected Steps Velocity."
