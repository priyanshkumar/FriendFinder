var path = require("path");
var friends = require("../data/friend");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    var friend = req.body;
    var tmpScore = 0;
    var match = 51;
    var index;

    for (var i = 0; i < friends.length; i++) {
      for (var j = 0; j < friends[i].scores.length; j++) {
        tmpScore += Math.abs(parseInt(friend.scores[j]) - friends[i].scores[j]);
      }

      if (match > tmpScore) {
        match = tmpScore;
        index = i;
      }
      tmpScore = 0;
    }

    friends.push(friend);

    res.send(friends[index].name);
  });
};
