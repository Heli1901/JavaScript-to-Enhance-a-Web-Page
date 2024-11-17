// Footer with Current Year
const footer = document.createElement('footer');
const currentYear = new Date().getFullYear();
footer.innerHTML = `&copy; Your Name, ${currentYear}`;
document.body.appendChild(footer);
console.log(new Date().toString()); // Prints today's entire date to the console

// Portfolio Greeting
const greetingElement = document.getElementById('greeting');
const currentHour = new Date().getHours();
let greetingMessage;

if (currentHour < 12) {
    greetingMessage = "Good morning!";
    greetingElement.classList.add('morning');
} else if (currentHour < 17) {
    greetingMessage = "Good afternoon!";
    greetingElement.classList.add('afternoon');
} else {
    greetingMessage = "Good evening!";
    greetingElement.classList.add('evening');
}

greetingElement.innerText = greetingMessage;

// Alert Button
const alertButton = document.getElementById('btn-alert');
alertButton.addEventListener('click', () => {
    alert("Hello world!");
});

// Hover Button
alertButton.onmouseover = function() {
    alertButton.innerText = "Hovered!";
};
alertButton.onmouseout = function() {
    alertButton.innerText = "Click me!";
};

// For Loop to Populate an Ordered List
const numbersList = document.getElementById('numbers');
for (let i = 1; i <= 12; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = (i % 2 === 0) ? 'Even' : 'Odd';
    numbersList.appendChild(listItem);
}