var mongoose = require("mongoose");

var bookSchema = mongoose.Schema({ 
	title : {
		type : String,
		required : true
	},
	genre : {
		type : String,
		required : true
	},
	description : {
		type : String,
		required : true
	},
	author : {
		type : String,
		required : true
	},
	publisher : {
		type : String,
	},
	buy_url : {
		type : String,
		required : true
	},
	pages : {
		type : String,
		required : true
	},
	create_date : {
		type : Date,
		default : Date.now
	}
});

//Creating object to be accessible from outside

var Book = module.exports = mongoose.model('Book',bookSchema);

//Get genres

module.exports.getBooks = function(callback , limit){
	Book.find(callback).limit(limit);
};

module.exports.getBookById = function(id, callback){
	Book.findById(id, callback);
};


