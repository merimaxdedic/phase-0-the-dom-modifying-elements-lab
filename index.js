// Create a new <h1> element
const newHeader = document.createElement('h1');

// Set the id for the <h1> element
newHeader.id = 'victory';

// Set the text content for the <h1> element with the desired message
const yourName = 'Merima'; // Replace 'Ada' with your name
newHeader.textContent = `${yourName} is the champion`;

// Find the <body> element
const body = document.querySelector('body');

// Append the new <h1> element to the <body>
body.appendChild(newHeader);