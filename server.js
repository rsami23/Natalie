const express = require("express");
const app = express();
const exphbs = require("express-handlebars");

const PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs ({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.get("/", function(req, res) {
    res.render("home.handlebars");
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});