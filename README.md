# Frontend Task

## General Info
This application is a simple single page application that allows a user to create and draw from a deck of cards. The application tracks matches between both suit and number and displays these values to the user once all cards are drawn.

## Technologies Used
This application uses simple HTML, CSS and Javascript, with further utility libraries. Vue.js is used in a simple form for a framework, allowing dynamic state changes to onscreen values. Jquery is also implemented for simple shorthand javascript methods. Once the document loads it initialises the deck of cards, and the drawcard() method triggers a fetch() request for one card. This function also checks the card received with the last card and increases relevant values. SASS is used to generate a CSS stylesheet including transitions, linked and updated with Koala.

## Setup and Run
As the application is simple and does not have any node.js functionality, it is also very simple to run. Simply download the repository and launch the index.html file through a local live server. I achieved this with the VS Code Live Server extension.
