const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

//1st Create views name of a Directory
//2nd create a file name home.ejs It is a templete

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

    app.get("/", (req,res) => {
        res.render("home.ejs");
    });

    //Instagram EJS:
    app.get("/ig/:username", (req, res) => {
        let {username} = req.params;
        res.render("instagram.ejs", {username});
    });

    //PAssing Data to Ejs:
    app.get("/rolldice", (req,res) => {
        let diceVal = Math.floor(Math.random()*6) +1;
        res.render("rollDice.ejs", {diceVal});
    }); 
app.listen(port, () => {
    console.log(`listinning app on port: ${port}`);
});

