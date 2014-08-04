exports.index = function(req, res){
  res.render('index');
};

exports.partials = function (req, res){
	console.log("here");
	var name = req.params.name;
	res.render('partials/' + name); 
}