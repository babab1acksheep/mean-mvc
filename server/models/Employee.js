var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Employee = new Schema({
	firstName: String,
	lastName: String,
	email: String,
  employeeId: Number,
  desgination: String
}, {
  versionKey: false,
  
  toJSON: {
    virtuals: true,
    transform: function(doc, ret, options) {
      ret.id = ret._id.toHexString();
      delete ret._id;
    }
  },
  
  toObject: {
    virtuals: true
  }
});

mongoose.model('Employee', Employee);