angular.module('maisaApp').controller('usersCtrl', ['$http', '$scope', function ($http, $scope) {
  'use strict';

  var baseUrl = 'http://52.90.39.159:8080';

  $scope.query = {
    limit: 20,
    page: 1
  };

  $scope.getUsers = function () {
    $http.get(baseUrl + '/users', { params: { page: $scope.query.page - 1 } }).then(function (body) {
      $scope.users = body.data;
      $scope.showError = false;
    });
  };

  $scope.getUsers();

  $scope.searchUser = function (name) {
    if (name && name !== '') {
      $http.get(baseUrl + '/user', { params: { name: name } })
        .then(function (body) {
          $scope.users.content = [body.data];
          $scope.users.totalElements = 1;
          $scope.users.totalPages = 1;
          $scope.users.inumberOfElements = 1;
        }, function (error) {
          console.log(error)
          $scope.errorMessage = error.data.message
          $scope.showError = true;
        });
    } else {
      $scope.getUsers();
    }
  }

  var largerInbox = function () {
    $http.get(baseUrl + '/user_inbox').then(function (body) {
      $scope.largerInbox = body.data.name;
    });
  }

  largerInbox();

  var largerSize = function () {
    $http.get(baseUrl + '/user_size').then(function (body) {
      $scope.largerSize = body.data.name;
    });
  }

  largerSize();

}]);
