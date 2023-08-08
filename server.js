const express = require("express");

const app = express();

const PORT = 8080;

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

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/greeting", (req, res) => {
  res.send("Hello, stranger!");
});
app.get("/greeting/:name", (req, res) => {
  res.send(`Whats's up ${req.params.name}?`);
});
app.get("/tip/:total/:tipPercentage", (req, res) => {
  let { total, tipPercentage } = req.params;
  let calculatedTip = total * (tipPercentage / 100);

  res.send(
    `<h1>Calculated ${tipPercentage}% tip on $${total} is $${calculatedTip} </h1>`
  );
});
app.get("/magic/:question", (req, res) => {
  let response = responses[Math.floor(Math.random() * responses.length)];

  res.send(`<h1>${req.params.question}?</h1><h1>${response}</h1>`);
});

app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
