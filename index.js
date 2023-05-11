let express = require("express");

let app = express();

let data = require("./data/data.json");

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.json(data);
});

app.get("/speficproduct", (req, res) => {
  let final = data.find((d) => {
    return d.id === req.query.id;
  });

  res.render("info", { final });
});
app.listen(3000, (d) => {
  console.log("Server is running");
});
