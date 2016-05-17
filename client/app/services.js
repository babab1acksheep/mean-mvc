/*jslint node: true */
/*global angular */
"use strict";

angular.module("myApp.services", []).factory("Employee", function($resource) {
  return $resource('/api/employees/:id', {
    id: '@id'
  }, {
    update: {
      method: "PUT"
    },
    remove: {
      method: "DELETE"
    }
  });
});
