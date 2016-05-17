/*jslint node: true */
/*jslint nomen: true */
/*global angular, _ */
"use strict";

angular.module("myApp.controllers", []).controller("employeeCtrl", function($scope, Employee) {
  
  $scope.employees = Employee.query();
  $scope.newEmployee = { };
  $scope.availableRoles = [
    {id:'TL', name:'Team Lead'},
    {id:'SSE', name:'Senior Software Engineer'},
    {id:'SE', name:'Software Engineer'},
    {id:'QA', name:'Quality Assurance'}
  ];  
  
  $scope.addEmployee = function() {
    var employee = new Employee();
    employee.firstName = $scope.newEmployee.firstname;
    employee.lastName = $scope.newEmployee.lastname;
    employee.email = $scope.newEmployee.email;
    employee.employeeId = $scope.newEmployee.employeeId;
    employee.designation = $scope.newEmployee.designation;

    employee.$save(function(response) {
      $scope.employees.push(response);
    });

    // $scope.newEmployee.firstName = "";
    // $scope.newEmployee.lastName = "";
    // $scope.newEmployee.email = "";
    // $scope.newEmployee.employeeId = "";
    // $scope.newEmployee.designation = "";
    $scope.newEmployee = { };

  };
  
  $scope.updateEmployee = function(song) {
    employee.$update();
  };
  
  $scope.deleteEmployee = function(/** Song */ song) {
    var idx = $scope.employees.indexOf(employee);
    if (idx >= 0) {
      $scope.employees.splice(idx, 1);
    }
    employee.$remove();
  };
  
  $scope.isEmpty = function(/** String */ str) {
    return _.isBlank(str);
  };
});
