var User = require('../models/User');

var index = function(req, res, next){
  User.find({}), function(err, users) {
    if (err) res.send(err);
    res.json({users: users});
  };
};


var showUser = function(req, res, next){
  User.findById(req.params.id, function(err, resource){
    if (err) res.send(err);
    res.render(users.show)
  })
}

// var newUser = function(req, res, next){
//   res.render(usersnew);
// };

var createUser = function(req, res, next){
  User.create(req.body.response, function(err, response){
    if(err) res.send(err);
    res.redirect('/users' + user.id);
  });
};

// var editUser = function(req, res, next){
//   User.findById(req.body.response, )
// }

// var update =

// var delete =

module.exports = {
  index: index,
  show: showUser,
  // new: newUser,
  create: createUser,
};
