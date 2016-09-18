'use strict';

angular.module("maisaApp")
  .controller('userControler', function ($scope, userService) {

  $scope.query = {
    limit: 20,
    page: 1
  };

  getUsers();
  getInbox();
  getSize();

  function getUsers () {
      userService.getAllUsers($scope.query.page)
        .then(function (body) {
          $scope.showError = false;
          $scope.users = body.data;
      })
  }

  function getUserByName (name) {
    if (name != null && name != "") {
      userService.getUser(name)
        .then(function (body) {
          $scope.users.content = [body.data];
          $scope.users.totalElements = 1;
          $scope.users.totalPages = 1;
          $scope.users.inumberOfElements = 1;
        },
        function (error) {
          $scope.users.content = null;
          $scope.errorMessage = error.data.message
          $scope.showError = true;
        })
    }
    else {
      getUsers();
    }
  }

  function getInbox () {
    userService.getBiggerInbox()
      .then(function (body) {
        $scope.biggerInbox = body.data.name;
      })
  }

  function getSize () {
    userService.getBiggerSize()
      .then(function (body) {
        $scope.biggerSize = body.data.name;
      })
  }

  $scope.getUserByName = getUserByName;
  $scope.getUsers = getUsers;

});
