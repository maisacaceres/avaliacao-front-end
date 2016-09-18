'use strict';

angular.module("maisaApp").service('userService', ['$http', function ($http) {

  var url = 'http://52.90.39.159:8080'; 
  
  this.getAllUsers = function (page) {
    return $http.get(url + '/users', { params: { page: page - 1 } });
  }

  this.getUser = function (user_name) {
    return $http.get(url + '/user', { params: { name: user_name } });
  }

  this.getBiggerInbox = function () {
    return $http.get(url + '/user_inbox');
  }

  this.getBiggerSize = function () {
    return $http.get(url + '/user_size');
  }

}]);
