# Clip Actions

Clip actions allow you to manipulate clips in Bitwig Studio. These actions include creating, renaming, and coloring clips.

## Clip Actions List

| Action          | Description                                                                        | Example                      |
| --------------- | ---------------------------------------------------------------------------------- | ---------------------------- |
| Clip Create     | Creates a new clip (Slot, Length). If in Arranger mode, slot param will be ignored | `Clip Create(3, 16)`         |
| Clip Delete     | Deletes the selected clip                                                          | `Clip Delete()`              |
| Clip Select     | Selects a clip by index                                                            | `Clip Select(2)`             |
| Clip Duplicate  | Duplicates the selected clip                                                       | `Clip Duplicate()`           |
| Clip Loop On    | Enables looping for the selected clip                                              | `Clip Loop On()`             |
| Clip Loop Off   | Disables looping for the selected clip                                             | `Clip Loop Off()`            |
| Clip Rename     | Renames the selected clip                                                          | `Clip Rename("Intro")`       |
| Clip Color      | Sets the color of the selected clip                                                | `Clip Color("#FF0000")`      |
| Clip Move       | Moves the selected clip to a specified position                                    | `Clip Move(4)`               |
| Clip Offset     | Sets the playback start offset for the selected clip                               | `Clip Offset(2.5)`           |
| Clip Accent     | Sets the accent value for the selected clip                                        | `Clip Accent(0.75)`          |
| Clip Length     | Changes the length of the selected clip                                            | `Clip Length(8.2)`             |

## Clip Actions Example

```plaintext
// Create a clip and set its properties
Clip Create(3, 16)
Clip Rename("Intro")
Clip Color("#FF0000")

// Enable looping for the clip
Clip Loop On()

// Set the clip's accent and length
Clip Accent(0.8)
Clip Length(8)
```