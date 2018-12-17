const express = require ("express");
const path = require('path');
const exphbs = require("express-handlebars");
const routes = require("./controllers/burgers_controllers.js");
const bodyParser = require ("body-parser");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");
app.set("port", (process.env.PORT || 3000));
app.use(routes);
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

app.listen(app.get("port"), function(){
    console.log("Server started on port " +app.get("port"));
});
