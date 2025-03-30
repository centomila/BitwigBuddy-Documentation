# Track Actions

Track actions allow you to manipulate tracks in Bitwig Studio. These actions include creating, renaming, and selecting tracks.

## Available Actions

| Action           | Description                          | Example                     |
|------------------|--------------------------------------|-----------------------------|
| Create Instrument Track | Creates a new instrument track | `Create Instrument Track`   |
| Track Rename     | Renames the selected track           | `Track Rename("Drums")`    |
| Select Track     | Selects a track by index            | `Select Track(2)`           |

### Example Usage

```plaintext
// Create a new track and rename it
Create Instrument Track
Track Rename("Drums")
```