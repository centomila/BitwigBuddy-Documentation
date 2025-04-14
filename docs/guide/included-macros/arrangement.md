# Arrangement Macros

Arrangement macros provide powerful tools for organizing and structuring your Bitwig Studio projects. These macros help streamline the arrangement process by automatically creating cue markers for different music genres and arrangement styles.

Unfortunately, the current Bitwig API doesn't support cue marker colors, so all cue markers will be created with the default yellow color.

## Available Arrangement Macros

| Macro Name | Description | BPM |
|------------|-------------|-----|
| Arrangement - Pop | Creates cue markers for a standard pop song structure | 120 |
| Arrangement - Rock | Creates cue markers for a rock song arrangement | 140 |
| Arrangement - House | Creates cue markers for a house track arrangement | 126 |
| Arrangement - Melodic Techno | Creates basic cue markers for a melodic techno track | 124 |
| Arrangement - Melodic Techno Original Mix | Creates detailed cue markers for an extended melodic techno mix | 124 |
| Arrangement - Delete All Cue Markers | Utility macro to remove all cue markers from the project | - |

## How These Macros Work

Each arrangement macro:
1. Sets appropriate tempo and time signature for the genre
2. Removes any existing cue markers (optional)
3. Jumps to the beginning of the arrangement
4. Places labeled cue markers at appropriate intervals for the genre
5. Names each marker according to typical sections for that genre (intro, verse, chorus, etc.)

## Example: Pop Arrangement Macro

```
Macro: "Arrangement - Pop (Cue Markers)"
Description: "Generate Cue Markers for a Pop Track."
Author: "Centomila"
Bpm (120)
Time Signature ("4/4")

DeleteAllCueMarkers

jump_to_beginning_of_arranger_window
insert_arranger_cue_marker_at_play_position
CueMarkerName (1, Intro)

jump_forward_8_bars
insert_arranger_cue_marker_at_play_position
CueMarkerName (2, Verse 1)

jump_forward_8_bars
insert_arranger_cue_marker_at_play_position
CueMarkerName (3, Pre-Chorus)

// ...continues with more sections...
```

## Example: Melodic Techno Arrangement (Detailed)

For electronic music producers, the "Melodic Techno Original Mix" macro provides a more detailed arrangement structure:

```
Macro: "Arrangement - Melodic Techno Original Mix"
Description: "Generate Cue Markers for a detailed Melodic Techno extended mix."
Author: "Centomila"
Bpm (124)
Time Signature ("4/4")

DeleteAllCueMarkers

jump_to_beginning_of_arranger_window
insert_arranger_cue_marker_at_play_position
CueMarkerName (1, Intro - Pads & Atmos)

jump_forward_8_bars
insert_arranger_cue_marker_at_play_position
CueMarkerName (2, Percussion Layer Introduced)

// ...continues with detailed electronic music structure...
```

## Using Arrangement Macros

These macros are particularly useful when starting a new project:

1. Create a new project in Bitwig Studio
2. Select the genre that matches your intended style
3. Run the appropriate arrangement macro
4. The macro will create labeled cue markers that provide a structural framework
5. You can then build out each section of your arrangement following this framework

You can also customize any of these macros to match your preferred arrangement structure by editing the macro file.

## Removing Cue Markers

If you want to start over or remove all cue markers from your project, you can use the "Delete All Cue Markers" utility macro:

```
Macro: "Arrangement: DELETE ALL CUE MARKERS"
Descritpion: "Delete all cue markers"
Author: "Centomila"

DeleteAllCueMarkers

Message ("Macro Finished")
```

::: tip
Use ChatGPT or your favourite AI tool to generate new arrangement macros based on your specific needs. Upload some examples of your arrangement and ask the AI to create a macro that matches your style.
:::