const express = require("express");

const server = express();

// server.get("/", (request, response) => {
//     response.status(404).send('Hello world!')
//     response.send(`<h1>Hello, it's ${time}</h1>`);
// });

server.get('/json', (request, response) => {
    response.send({ message: "Hello" });
});

server.get("/redirects", (request, response) => {
    response.redirect("/");
  });

// response.set({
//     "x-fake-header": "my value",
//     "x-another-header": "another value",
//   });

const PORT = 3000;

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));