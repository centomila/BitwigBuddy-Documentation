# Step Actions

Step actions allow you to manipulate individual steps in a MIDI pattern. These actions include setting velocity, length, and other properties for selected steps.

## Available Actions

| Action                          | Description                                      | Example                                |
|---------------------------------|--------------------------------------------------|----------------------------------------|
| Step Selected Velocity          | Sets the velocity for selected steps            | `Step Selected Velocity(100)`         |
| Step Selected Length            | Sets the length for selected steps              | `Step Selected Length(0.5)`           |
| Step Selected Chance            | Sets the chance value for selected steps        | `Step Selected Chance(0.75)`          |
| Step Selected Transpose         | Transposes the selected steps                   | `Step Selected Transpose(12)`         |
| Step Selected Gain              | Sets the gain for selected steps                | `Step Selected Gain(0.8)`             |
| Step Selected Pressure          | Sets the pressure (aftertouch) for selected steps | `Step Selected Pressure(0.6)`       |
| Step Selected Timbre            | Sets the timbre for selected steps              | `Step Selected Timbre(0.7)`           |
| Step Selected Pan               | Sets the pan value for selected steps           | `Step Selected Pan(0.5)`              |
| Step Selected Velocity Spread   | Sets the velocity spread for selected steps     | `Step Selected Velocity Spread(0.2)`  |
| Step Selected Release Velocity  | Sets the release velocity for selected steps    | `Step Selected Release Velocity(0.5)` |
| Step Selected Is Chance Enabled | Enables/disables chance for selected steps      | `Step Selected Is Chance Enabled(true)` |
| Step Selected Is Muted          | Mutes/unmutes selected steps                    | `Step Selected Is Muted(true)`        |
| Step Selected Is Occurrence Enabled | Enables/disables occurrence for selected steps | `Step Selected Is Occurrence Enabled(true)` |
| Step Selected Is Recurrence Enabled | Enables/disables recurrence for selected steps | `Step Selected Is Recurrence Enabled(true)` |
| Step Selected Is Repeat Enabled | Enables/disables repeat for selected steps      | `Step Selected Is Repeat Enabled(true)` |
| Step Selected Occurrence        | Sets the occurrence condition for selected steps | `Step Selected Occurrence(FIRST)`    |
| Step Selected Recurrence        | Sets the recurrence pattern for selected steps  | `Step Selected Recurrence(4, 15)`     |
| Step Selected Repeat Count      | Sets the repeat count for selected steps        | `Step Selected Repeat Count(4)`       |
| Step Selected Repeat Curve      | Sets the repeat timing curve for selected steps | `Step Selected Repeat Curve(0.5)`     |
| Step Selected Repeat Velocity Curve | Sets the repeat velocity curve for selected steps | `Step Selected Repeat Velocity Curve(0.3)` |
| Step Selected Repeat Velocity End | Sets the end velocity for note repeats         | `Step Selected Repeat Velocity End(0.4)` |
| Step Set                        | Sets multiple properties for selected steps     | `Step Set(velocity=100, length=0.5)`  |

### Example Usage

```plaintext
// Set velocity and length for selected steps
Step Selected Velocity(100)
Step Selected Length(0.5)

// Enable chance and set its value
Step Selected Is Chance Enabled(true)
Step Selected Chance(0.75)

// Set recurrence pattern and repeat count
Step Selected Recurrence(4, 15)
Step Selected Repeat Count(4)
```