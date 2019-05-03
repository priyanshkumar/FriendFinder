const express = require("express");

const PORT = process.env.PORT || 3000;
const app = express();

require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
  console.log(`Server running on Port ${PORT}`);
});
