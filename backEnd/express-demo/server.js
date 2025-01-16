import express from "express";

const app = express();
const port = 3000;

app.get('/welcomeMsg', (req, res) => {
    res.send('<h1>Welcome</h1').sendStatus(200);
});

app.listen(port, (req, res) => {
    console.log(`The server is up and running on port no. ${port}`);
}); 