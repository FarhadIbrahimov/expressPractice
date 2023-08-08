# Express Basics Practice: First Express Lab

Welcome to the First Express Lab! In this lab, you will have the opportunity to practice the fundamentals of setting up Express applications, creating custom routes, and working with URL/query parameters. Whether you're a beginner or a non-professional coder, this README will guide you through the process step by step.

## Learning Objectives

By completing this lab, you will:

- Set up Express servers for practice
- Create various GET routes
- Use URL and query parameters effectively
- Strengthen your understanding of Express basics

## Prerequisites

Before you start, make sure you have the following:

- Node.js installed on your machine
- Basic understanding of JavaScript and HTML fundamentals
- Basic knowledge of how the internet works, including request and response concepts
- Introduction to Express.js

## Getting Started

1. Create a JavaScript file named `server.js` in the homework directory for today.
2. Run the following command to initialize your project:

   ```bash

   npm init -y
   ```

This will generate a package.json file for your project.

1. Install Express by running the following command:

npm install express

Make sure you see express listed in your package.json file.

2. Open your server.js file and require Express at the top of the file:

const express = require("express");
const app = express();

3. Set up the server to listen for requests on a specific port. You can choose a port number, for example:

const PORT = 8080;
app.listen(PORT, () => {
console.log("Listening on port " + PORT);
});

### Greetings Route

#### Create a route that sends a generic greeting to the screen:

> > Route: /`greeting Response: "Hello, stranger!"`
> >
> > > You can also create a personalized greeting route by adding a parameter:

> > Route: `/greeting/:name`
> > Response: ` "What's up, ${name}!"`` or  `"${name}! It's so great to see you!"`

### Tip Calculator Route

#### Create a route that calculates the tip based on the total amount of the bill and the tip percentage:

> > Route: `/tip/:total/:tipPercentage`
> > Response: `"Calculated {tipPercentage}% tip on $<total> is ${calculatedTip}"`

### Magic 8 Ball Route

### Create a route that simulates a Magic 8 Ball response to a user's question:

> > Route: `/magic/:question`
> > Response: `"${question}?<br>${randomMagicResponse}"`
> >
> > > Use the following array of Magic 8 Ball responses:

````const responses = [
 "It is certain", "It is decidedly so", "Without a doubt", "Yes definitely",
 "You may rely on it", "As I see it yes", "Most likely", "Outlook good",
 "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later",
 "Better not tell you now", "Cannot predict now", "Concentrate and ask again",
 "Don't count on it", "My reply is no", "My sources say no",
 "Outlook not so good", "Very doubtful"
 ]; ```

## Running the App

To run your Express application, execute the following command in your terminal:

node server.js

Visit the following routes in your web browser or API testing tool:

http://localhost:8080/greeting
http://localhost:8080/greeting/\<name>
http://localhost:8080/tip/\<total>/<tipPercentage>
http://localhost:8080/magic/\<question>

##Conclusion

Congratulations! You've successfully completed the First Express Lab. You've practiced setting up Express servers, creating custom routes, and using URL/query parameters. Feel free to explore further and build upon these concepts to create more advanced applications.

Remember, if you encounter any issues or have questions, don't hesitate to reach out for help. Happy coding!

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.
````
