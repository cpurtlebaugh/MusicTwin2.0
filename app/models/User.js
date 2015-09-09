var mongoose    = require('mongoose'),
    Schema      = mongoose.Schema,
    bcrypt      = require('bcrypt-nodejs');


var UserSchema  = new Schema ({
    firstName: String,
    lastName: String,
    email: String,
    username: {type: String, required: true, index: {unique: true}},
    password: {type: String, required: true, select: false}
});

// hash the pw before the user is saved
UserSchema.pre('save', function(next){
  console.log('made it inside .pre');
  var user = this;

  // has only if the user is new or a current user has changed it
  if (!user.isModified('password')) return next();

  // generate the hash

  bcrypt.hash(user.password, null, null, function(err, hash){
    if (err) return next(err);
    // change pw to the hashed version
    user.password = hash;
    next();
  });
});

// compare login provided hash w/ db hash

UserSchema.methods.comparePassword = function(password){
  var user = this;
  return bcrypt.compareSync(password, user.password);
};

module.exports = mongoose.model('User', UserSchema);
