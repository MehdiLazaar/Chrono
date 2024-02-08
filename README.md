# Chronometre HTML, CSS and Js Description

### HTML Structure:
- The HTML document is structured with the necessary elements for creating a stopwatch (chronometer).
- It includes a `div` element with a class of "chronometre" to encapsulate the stopwatch.
- Inside this div, there's another div with a class of "time" containing spans to display hours, minutes, seconds, and milliseconds.
- Additionally, there's a div with a class of "controls" housing buttons for starting, stopping, and resetting the stopwatch.

### CSS Styling:
- The CSS file (`style.css`) styles the appearance of the stopwatch and buttons.
- It sets the overall layout, fonts, colors, and dimensions.
- Styles include using Google Fonts for 'Dancing Script' and 'Roboto', setting background colors, borders, padding, and alignment.
- Buttons are styled with specific dimensions, colors, and hover effects.

# Chronometre JavaScript Description

### Variable Declaration:
- Variables are declared to store elements and values needed for the stopwatch functionality.

### Initialization Function:
- The `window.onload` function initializes variables and retrieves necessary elements from the HTML document.

### Update Chronometer Function:
- The `upload_Chrono()` function updates the time displayed on the stopwatch.
- It increments milliseconds, seconds, minutes, and hours as required.

### Start Function:
- The `start()` function initiates the stopwatch.
- It calls `upload_Chrono()` function every 100 milliseconds using `setInterval`.
- Disables the start button while the stopwatch is running.

### Stop Function:
- The `stop()` function pauses the stopwatch.
- It clears the interval previously set by `start()`.

### Reset Function:
- The `reset()` function resets the stopwatch to its initial state.
- Clears the interval, resets time variables, updates the display, and enables the start button.

### Event Handlers:
- Event handlers are assigned to buttons in the HTML markup, triggering respective functions (`start()`, `stop()`, `reset()`).

### Comments:
- Inline comments are provided throughout the JavaScript code for clarity and understanding.
