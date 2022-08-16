const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}))

app.get("/" , (req , res) => {
    res.sendFile(__dirname + "/index.html")
})


app.post("/", (req , res) => {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send(`<h1>The result of the calculation is ${result}</h1>`);
})


app.get("/bmiCalc",(req , res) => {
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/bmiCalc", (req , res) => {
    var num1 = parseFloat(req.body.weight);
    var num2 = parseFloat(req.body.height);
    var result = num1 / (num2 * num2);
    res.send(`<h1>The result of the calculation is ${result}</h1>`);
})

app.listen(port, () => {
    console.log(`Started listing at server port ${port}`);
})