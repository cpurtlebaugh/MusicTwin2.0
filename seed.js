var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/MusicTwin2');

var User = require('./app/models/User');

// callback-style
User.remove({}, function(err) {
  if (err) console.log(err);
  console.log("All users removed...");
});

var newUsers = [
    {firstName: "john", lastName: "doe", username: "jdoe", email: "jdoe@doe.com", password: "jdoe",
      twins: [
        {name: "Verite",
          videoStreams: {US: "200,000", CA: "289,000", UK: "190000"},
          musicStreams: {US: "184039", CA: "804000", UK: "102999"},
          blogScore: {US:"60", CA: "89", UK: "39"}
        },

        {name: "Olivver the Kid",
          videoStreams: {US: "100000", CA: "80000", UK: "128933"},
          musicStreams: {US: "808933", CA: "98000", UK: "101928"},
          blogScore: {US: "43", CA: "20", UK: "39"}
        },

        {name: "EZA",
          videoStreams: {US: "120000", CA: "50000", UK: "50000"},
          musicStreams: {US: "208199", CA: "90839", UK: "100000"},
          blogScore: {US:"30", CA: "20", UK: "15"}
        }
      ]
    },

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


