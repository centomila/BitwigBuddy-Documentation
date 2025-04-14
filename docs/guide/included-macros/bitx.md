# Bitx Macros

Bitx macros are designed to work with the [BitX Bitwig Extension](https://github.com/wimvandenborre/BitX) created by talented musician [Wim Van den Borre](https://github.com/wimvandenborre) ([YouTube Channel](https://www.youtube.com/@creatingspacesproducer)). These macros create clips with special commands that are interpreted by the BitX extension, providing powerful tools for live performance and studio work.

## What is BitX?

BitX is a complementary Bitwig Studio extension with some overlapping features with BitwigBuddy, but it's more focused on live performance capabilities. It allows you to control various aspects of Bitwig Studio through specially-named clips, making it excellent for live sets and automated studio workflows.

Check out these videos to see BitX in action:

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/J4SEQO-LzUA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/kUrBRRthE9I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Available Bitx Macros

BitwigBuddy includes macros that create clips with BitX commands. Each macro creates a clip with a specific color and naming convention that BitX recognizes:

| Macro Name | Description | Clip Color | Example Usage |
|------------|-------------|------------|--------------|
| BitX BPM | Change the project tempo | #FF595E | `()BPM 130` |
| BitX LDR | Load a drum rack preset | #FF924C | `()LDR Electronic Kit` |
| BitX LIR | Load an instrument preset | #FFCA3A | `()LIR Synth Lead:3` |
| BitX OSC | Send an OSC message | #C5CA30 | `()OSC /example/address 1 "string arg" 3.14` |
| BitX SCF | Set channel filter | #8AC926 | `()SCF 1:3:5` |
| BitX SMW | Display a setup message | #52A675 | `()SMW Setting up drum sounds` |
| BitX SNF | Set note filter key range | #1982C4 | `()SNF C2:C5` |
| BitX SNT | Set note transpose settings | #4267AC | `()SNT 1:20:-10` |
| BitX SPN | Show a popup notification | #6A4C93 | `()SPN I Love BitX` |
| BitX STS | Set time signature | #B5A6C9 | `()STS 4:8` |
| BitX ALL | Create a clip for each command | Various | Creates all command examples |

## How Bitx Macros Work

Each Bitx macro creates a clip with a specific format that the BitX extension recognizes. The general format is:

```
()COMMAND parameter1:parameter2:parameter3
```

When these clips are triggered in Bitwig Studio, the BitX extension intercepts them and performs the associated action instead of playing the clip.

## Example: BitX BPM Macro

```
Macro: "BitX BPM (Tempo)"
Descritpion: "Change the track tempo (Requires BitX)"
Author: "Centomila"

Clip Color ("FF595E")
Clip Rename ("()BPM 130")
```

This macro creates a clip named `()BPM 130` with a red color. When triggered, BitX will change the project tempo to 130 BPM.

## Example: Creating Multiple BitX Commands

The "BitX All" macro demonstrates how to create multiple BitX command clips in sequence:

```
Macro: "BitX All"
Descritpion: "Change the track tempo (Requires BitX)"
Author: "Centomila"

Clip Create (1, 16)
Macro ("BitX/BitX BPM (Tempo)")
Clip Duplicate
Select next item
Macro ("BitX/BitX LDR (Load Drum Rack)")
// ...continues creating all BitX command examples...
```

## Using Bitx Macros with BitX

To use these macros effectively:

1. First, [install the BitX extension](https://github.com/wimvandenborre/BitX) in Bitwig Studio
2. Run the desired Bitx macro from BitwigBuddy's macro mode
3. The macro will create a clip with the appropriate BitX command
4. When the clip is triggered in your session, BitX will interpret the command
5. You can organize these command clips in your session for automated live performances

## BitX Command Reference

Here's a quick reference for the BitX commands created by these macros:

- `()BPM value` - Set project tempo
- `()LDR preset` - Load drum rack preset
- `()LIR preset:variation` - Load instrument preset
- `()OSC /address arg1 arg2` - Send OSC message
- `()SCF channels` - Set channel filter values
- `()SMW message` - Display setup message
- `()SNF range` - Set note filter key range
- `()SNT octave:coarse:fine` - Set note transpose values
- `()SPN message` - Show popup notification
- `()STS numerator:denominator` - Set time signature

For more detailed information about BitX, visit the [BitX GitHub repository](https://github.com/wimvandenborre/BitX) or check out Wim Van den Borre's [YouTube channel](https://www.youtube.com/@creatingspacesproducer).