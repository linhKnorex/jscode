var passport = require('passport');
var userAPI = require('../routes/user');

module.exports = {
	register: function(db){
		return function(req, res, next){
			var user = {
				username: req.body.username,
				password: req.body.password,
				type: req.body.type,
				remember: false
			}

			userAPI.addUser(user, db, function(err, data){
				if (err == "UserAlreadyExist") {
					return res.json(200, {
						error: "User Already Exists"
					});
				} else if (err) {
					return res.send(500, "Internal Error!");
				}

				req.logIn(data, function(err) {
				  	if (err) { 
				  		return next(err);
				  	}
				  
					return res.json(200, {
						message: "Register Successfully!"
					});
				});
			});
		}
	},

	login: function(db){
		return function (req, res, next){
			passport.authenticate('local', function(err, user, info){

				if (err){
					return next(err);
				}

				if (!user){
					return res.json(200, {
						error: info.message
					})
				}

				user.remember = req.body.remember;

				if(req.body.rememberme) {
					req.session.cookie.maxAge = 7 * 24 * 60 * 60 * 1000;
				}

				user.save(function(err, user){
					if (err){
						return next(err);
					}

					req.logIn(user, function(err){
						if (err){
							return next(err);
						}
						
						return res.json(200, {
							message: "Log In Successfully"
						})
					})
				})
			})(req, res, next);
		};
	},

	user: function(req, res, next){
		return res.json(200, {
			user: req.session.passport.user
		})
	},

	users: function(db){
		return function(req, res, next){
			var Users = db.model('Users');
			var query = Users.find({});
			query.exec(function(err, users){
				if (err){
					return next(err);
				}
				return res.json(200, {
					users: users
				});
			})
		}
	},

	logout: function(req, res, next){
		if (req.isAuthenticated()){
			req.logout();
			return res.json(200, {
				message: "Log Out Successfully"
			})
		}
	}
}