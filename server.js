const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;


app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);
