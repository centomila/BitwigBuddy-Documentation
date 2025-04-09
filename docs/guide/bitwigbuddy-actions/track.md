# Track Actions

Track actions allow you to manipulate tracks in Bitwig Studio. These actions include creating, renaming, and selecting tracks.

## Track Actions List

| Action                  | Description                    | Example                   |
| ----------------------- | ------------------------------ | ------------------------- |
| Create Instrument Track | Creates a new instrument track | `Create Instrument Track` |
| Track Rename            | Renames the selected track     | `Track Rename("Drums")`   |
| Track Select            | Selects a track by index       | `Track Select (2)`        |
| Track Next              | Selects the next track         | `Track Next`              |
| Track Previous          | Selects the previous track     | `Track Previous`          |

## Track Actions Example

```plaintext
// Create a new track and rename it
Create Instrument Track
Track Rename("Drums")
```