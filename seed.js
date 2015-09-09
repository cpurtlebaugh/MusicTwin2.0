var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/MusicTwin2');

var User = require('./app/models/User');

// callback-style
User.remove({}, function(err) {
  if (err) console.log(err);
  console.log("All users removed...");
});

var newUsers = [
    {firstName: "john", lastName: "doe", username: "jdoe", email: "jdoe@doe.com", password: "jdoe"},
    {firstName: "ann", lastName: "doe", username: "adoe", email: "adoe@doe.com", password: "adoe"}
  ];

// promise-style
User
  .create(newUsers)
  .then(
    function(users) {
      console.log(users.length + " users seeded.");
    }, function(err) {
      console.log(err);
  })
  .then(function() {
    mongoose.disconnect();
  });


