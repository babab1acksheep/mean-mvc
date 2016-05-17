var rest = require('../server/controllers/rest');
var employee = require('../server/controllers/EmployeeController');

module.exports = function(app){

  // find all songs route
  app.get('/songs', rest.findAll);
  
  // find one song route
  app.get('/songs/:id', rest.findOne);
  
  // Add song route
  app.post('/songs', rest.add);
  
  // Update song route
  app.put('/songs/:id', rest.update);
  
  // Delete song route
  app.del('/songs/:id', rest.remove);

  //Employee Operations

  app.get('/employees', employee.findAll);
  
  // find one song route
  app.get('/employees/:id', employee.findOne);
  
  // Add song route
  app.post('/employees', employee.add);
  
  // Update song route
  app.put('/employees/:id', employee.update);
  
  // Delete song route
  app.del('/employees/:id', employee.remove);
};