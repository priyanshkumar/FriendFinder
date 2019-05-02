var path = require("path");

module.exports = function(app) {
  app.use(express.static(path.join(__dirname, "public")));

  app.get("/", function(req, res) {
    res.sendFile("/home.html");
  });

  app.get("/survey", function(req, res) {
    res.sendFile("/survey.html");
  });
};
