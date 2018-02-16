const express = require("express");
const app = express();
const handlebars = require("express-handlebars").create({
    defaultLayout: "main"
});

app.engine("handlebars", handlebars.engine);

app.set("view engine", "handlebars");

app.set("port", process.env.PORT || 3000);

app.get("/", (request, response) => {
    response.render("landing");
})

app.listen(app.get("port"), () => {
    console.log(
        "Running on " +
        app.get("port") +
        "; Ctrl-C to terminate."
    )
})