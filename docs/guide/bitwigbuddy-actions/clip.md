# Clip Actions

Clip actions allow you to manipulate clips in Bitwig Studio. These actions include creating, renaming, and coloring clips.

## Available Actions

| Action           | Description                          | Example                     |
|------------------|--------------------------------------|-----------------------------|
| Clip Create      | Creates a new clip                  | `Clip Create(3, 16)`        |
| Clip Rename      | Renames the selected clip            | `Clip Rename("Intro")`     |
| Clip Color       | Sets the color of the selected clip  | `Clip Color("#FF0000")`    |

### Example Usage

```plaintext
// Create a clip and set its properties
Clip Create(3, 16)
Clip Rename("Intro")
Clip Color("#FF0000")
```