var mongoose = require('mongoose'), Employee = mongoose.model('Employee');

exports.findAll = function(req, res) {
  Employee.find({}, function(err, employees) {
    if (err) {
      throw new Error(err);
    }
  	res.send(employees);
  });
};

exports.findOne = function(req, res) {
  Employee.findById(req.params.id, function(err, employee) {
    if (err) {
      throw new Error(err);
    }
    res.send(employee);
  });
};

exports.add = function(req, res) {
  var document = new Employee(req.body);
  document.save(function(err, employee) {
    if (err) {
      throw new Error(err);
    }
    res.send(employee);
  });
};

exports.update = function(req, res) {
  Employee.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, function(err, employee) {
    if (err) {
      throw new Error(err);
    }
    res.send(employee);
  });
};

exports.remove = function(req, res) {
  Employee.findByIdAndRemove(req.params.id, function(err, employee) {
    if (err) {
      throw new Error(err);
    }
    res.send(employee);
  });
};