# Drum Pad Actions

Drum pad actions allow you to manipulate drum pads in Bitwig Studio. These actions include selecting pads, inserting devices, and managing files within drum pads.

## Available Actions

| Action                  | Description                                      | Example                                                       |
| ----------------------- | ------------------------------------------------ | ------------------------------------------------------------- |
| Select Drum Pad         | Selects a drum pad by note                       | `Drum Pad Select ("C1")`                                      |
| Drum Pad Insert Empty   | Creates an empty drum pad                        | `Drum Pad Insert Empty("C#2", "Name", "#D00000)`              |
| Drum Pad Insert Device  | Inserts a Bitwig device into the drum pad        | `Drum Pad Insert Device("C1", "Reverb")`                      |
| Insert File In Drum Pad | Inserts a file into the selected drum pad        | `Insert File In Drum Pad("C1", "c:\MySamplesDir\sample.wav")` |
| Insert VST3 In Drum Pad | Inserts a VST3 plugin into the selected drum pad | `Insert VST3 In Drum Pad("C1", "Reverb")`                     |

### Example Usage

```plaintext
// Select a drum pad
Drum Pad Select("C1")

// Insert a device into a drum pad
Drum Pad Insert Device("C1", "Reverb")

// Create an empty drum pad with name and color
Drum Pad Insert Empty("C#2", "Snare", "#D00000")

// Insert a file into a drum pad
Insert File In Drum Pad("C1", "c:\MySamplesDir\sample.wav")

// Insert a VST3 plugin into a drum pad
Insert VST3 In Drum Pad("C1", "Reverb")
```