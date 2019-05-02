var express = require("express");

var PORT = process.env.PORT || 3000;
var app = express;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, function() {
  console.log(`Server running on Port ${PORT}`);
});

require("./app/routing/htmlRoutes")(app);
