# Device Actions

Device actions allow you to manipulate devices in Bitwig Studio. These actions include inserting devices and VSTs.

## Available Actions

| Action           | Description                          | Example                     |
|------------------|--------------------------------------|-----------------------------|
| Insert Device    | Inserts a Bitwig device             | `Insert Device("Drum Machine")` |
| Insert VST3      | Inserts a VST3 plugin               | `Insert VST3("Reverb")`    |

### Example Usage

```plaintext
// Insert a device and a VST
Insert Device("Drum Machine")
Insert VST3("Reverb")
```