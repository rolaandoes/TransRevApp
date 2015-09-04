// server.js

// require express and other modules
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),  // for data from the request body
    mongoose = require('mongoose');       // to interact with our db

var User = require('./models/user.js'),
	Review = require('./models/reviews.js');

// connect to mongodb
mongoose.connect(
  process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
  'mongodb://localhost/test'
);

// configure body-parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//get all reviews
app.get('/api/reviews', function (req, res) {
	Review.find({}, function (err, reviews){
		res.json(reviews);
	})
});

//get specific review
app.get('/api/reviews/:id', function (req, res) {
	var targetId = req.params.id;
	Review.findOne({_id: targetId}, function (err, review) {
		review.title,
		review.link,
		review.body;
		res.json(review);
	})
});

//post a review
app.post('/api/reviews', function (req, res) {
	//create a new review
	var newReview = new Review({
		title: req.body.title,
		link: req.body.link,
		body: req.body.body
	});
		//save the question
	newReview.save(function (err, savedReview){
		res.json(savedReview);
	});
});

// set location for static files
app.use(express.static(__dirname + '/public'));

// load public/index.html file (angular app)
app.get('*', function (req, res) {
  res.sendFile(__dirname + '/public/views/index.html');
});


// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('server started on localhost:3000');
});