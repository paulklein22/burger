const express = require ("express");
// const path = require('path');
const exphbs = require("express-handlebars");


const app = express();
app.set("port", (process.env.PORT || 3000));

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// parse application/json
app.use(express.json());
app.use(express.static("public"));

// app.set("views", path.join(__dirname, "views"));
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");
const routes = require("./controllers/burgers_controllers.js");
app.use(routes);


app.listen(app.get("port"), function(){
    console.log("Server started on port " +app.get("port"));
});
