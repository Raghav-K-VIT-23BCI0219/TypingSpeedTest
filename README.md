# Typing Speed Test

This is a simple web-based typing speed test application. It provides a user interface where you can type a randomly generated quote within a 60-second time limit. After the time is up, it calculates and displays your typing speed in words per minute (WPM).

## Features

-   **Random Quotes:** Displays a random quote for each test.
-   **Timer:** 60-second countdown timer.
-   **Real-time Feedback:** Highlights correct and incorrect characters as you type.
-   **WPM Calculation:** Calculates and displays your typing speed in words per minute.
-   **Restart Functionality:** Allows you to restart the test with a new quote.
-   **Responsive Design:** Works well on various screen sizes.
-   **Fun Quotes:** Includes some pangrams and fun facts about VIT (Vellore Institute of Technology).

## Technologies Used

-   HTML
-   CSS
-   JavaScript

## Getting Started


1.  **Open `index.html` in your web browser.**

## How to Use

1.  The test starts automatically when you begin typing in the input field.
2.  Type the displayed quote as accurately and quickly as possible.
3.  The timer will count down from 60 seconds.
4.  Correct characters are highlighted in blue, and incorrect characters are highlighted in red.
5.  After 60 seconds, or when you finish typing the quote correctly, the test will end.
6.  Your typing speed (WPM) will be displayed.
7.  Click the "Try Again" button to start a new test with a different quote.

## File Structure

typing-speed-test/
├── index.html
├── styles.css
└── script.js


-   `index.html`: The HTML structure of the application.
-   `styles.css`: The CSS styles for the application.
-   `script.js`: The JavaScript logic for the application.

## Customization

-   You can modify the `quotes` array in `script.js` to add or change the quotes used in the test.
-   You can customize the styling by modifying the `styles.css` file.
-   Change the timer value inside the javascript file, by altering the timer variable, and the timerElement.innerText value in the renderNewSentence function.


## Author

Raghav Kohli-23BCI0219

## License

This project not licensed.
