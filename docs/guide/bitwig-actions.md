# Bitwig Embedded Actions

Bitwig Studio provides a set of internal actions that can be triggered via keyboard shortcuts or the *Commander*. This section documents all available native actions within Bitwig.

All Bitwig actions don't receive any parameters and are executed immediately when triggered. Be sure to focus on the correct panel before executing an action, as some actions may affect the currently selected panel or item.

Due to the extensive number of actions, they are categorized by functionality. Select a category below to view the specific actions.

## Usage

```
Macro: "Advance 8 bars and insert cue marker"
Description: "Generate Cue Markers for a House Track"
Author: "Centomila"

jump_forward_8_bars
insert_arranger_cue_marker_at_play_position
```

Embedded Bitwig Actions names don't have consistent naming. For example you will find some actions written like this:
`toggle_arranger_loop`
and other times like this:
`Play Transport From Start`

Commands are case sensitive, so be sure to use the correct case when using them in your macros.

Many commands are context-sensitive. For example, the command `Delete` will delete the currently selected item in the active panel. Could be a Track, a Device, a Clip, a Step, a Modulator or whatever can be deleted within Bitwig.

## Action Categories

- [Editing Actions](/guide/bitwig-actions/editing)
- [Project Actions](/guide/bitwig-actions/project)
- [Panel Management Actions](/guide/bitwig-actions/panel-management)
- [Zooming Actions](/guide/bitwig-actions/zooming)
- [Note Editor Actions](/guide/bitwig-actions/note-editor)
- [Arranger Actions](/guide/bitwig-actions/arranger)
- [Multisample Actions](/guide/bitwig-actions/multisample)
- [General Actions](/guide/bitwig-actions/general)
- [Help Actions](/guide/bitwig-actions/help)
- [Dialog Actions](/guide/bitwig-actions/dialogs)
- [Navigation Actions](/guide/bitwig-actions/navigation)
- [Search Actions](/guide/bitwig-actions/search)
- [File Actions](/guide/bitwig-actions/file)
- [Selection Actions](/guide/bitwig-actions/selection)
- [Comping Actions](/guide/bitwig-actions/comping)
- [Text Editing Actions](/guide/bitwig-actions/text-editing)
- [Browser Actions](/guide/bitwig-actions/browser)
- [Mixer Actions](/guide/bitwig-actions/mixer)
- [Window Management Actions](/guide/bitwig-actions/window-management)
- [Detail Editor Actions](/guide/bitwig-actions/detail-editor)
- [Clip Launcher Actions](/guide/bitwig-actions/clip-launcher)

Each category page contains a detailed table of available actions, their descriptions, and their action IDs.
