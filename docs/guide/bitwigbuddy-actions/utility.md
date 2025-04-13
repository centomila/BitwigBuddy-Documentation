# Utility Actions

Utility actions provide general-purpose functionality in Bitwig Studio. These actions include waiting and showing messages.

## Utility Actions List

| Action        | Description                                   | Example                   |
| ------------- | --------------------------------------------- | ------------------------- |
| Wait          | Pauses execution for a specified time         | `Wait(1000)`              |
| Message       | Displays a message box                        | `Message("Hello World!")` |
| List Commands | Lists all registered commands in the console. | `List Commands`           |

## Utility Actions Example

```plaintext
// Wait for 1 second and display a message
Wait(1000)
Message("Hello World!")
```