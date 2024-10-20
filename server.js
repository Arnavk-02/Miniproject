const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse incoming form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (HTML, CSS, images, etc.)
app.use(express.static('public')); // Assuming your HTML/CSS is in 'public' folder

// Route to handle form submission
app.post('/calculate-tax', (req, res) => {
    const income = req.body.income;

    // Example: Basic tax calculation logic
    let tax = 0;
    if (income <= 50000) {
        tax = income * 0.05;
    } else if (income <= 100000) {
        tax = income * 0.10;
    } else {
        tax = income * 0.20;
    }

    // Send the result back to the client
    res.send(`<h2>For an income of ${income}, your calculated tax is ${tax}.</h2>`);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

