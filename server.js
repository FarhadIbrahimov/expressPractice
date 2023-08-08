// Create an instance of the Express application
const express = require("express");
const app = express();

// Array of Magic 8 Ball responses
const PORT = 8080;

// Array of Magic 8 Ball responses
const responses = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];

// Handle requests for the "root" or home page
app.get("/", (req, res) => {
  res.send("Home Page");
});

// Define a route that sends a generic greeting
app.get("/greeting", (req, res) => {
  res.send("Hello, stranger!");
});

// Define a route that sends a personalized greeting based on the name parameter
app.get("/greeting/:name", (req, res) => {
  res.send(`Whats's up ${req.params.name}?`);
});

// Define a route that calculates the tip based on total and tipPercentage parameters
app.get("/tip/:total/:tipPercentage", (req, res) => {
  let { total, tipPercentage } = req.params;
  let calculatedTip = total * (tipPercentage / 100);

  // Send a formatted HTML response with the calculated tip
  res.send(
    `<h1>Calculated ${tipPercentage}% tip on $${total} is $${calculatedTip} </h1>`
  );
});
// Define a route that simulates a Magic 8 Ball response based on the question parameter
app.get("/magic/:question", (req, res) => {
  let response = responses[Math.floor(Math.random() * responses.length)];

  res.send(`<h1>${req.params.question}?</h1><h1>${response}</h1>`);
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
