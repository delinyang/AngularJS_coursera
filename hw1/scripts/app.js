(function (){
  'use strict';

  angular.module("LunchCheck", [])
  .controller("LunchCheckController", LunchCheckController)

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope)
  {
      $scope.msg = "";

      $scope.countItem = function(){
        var count = $scope.menu.split(",").length;
        if ($scope.menu.length == 0)
        {
          $scope.msg = "Please enter data first";
          $scope.fontColor = "red";
        }
        else if (count > 3)
        {
          $scope.msg = "You ate too much";
          $scope.fontColor = "black";
        }
        else {
          $scope.msg = "Enjoy";
          $scope.fontColor = "green";
        }
      }
  }
})();
