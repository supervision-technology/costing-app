(function () {
    angular.module("loginModule", ["ngAnimate"]);


    var loginController = function ($scope, $location) {

        $scope.login = function (name) {
            if (name == "admin") {
                $location.path('/admin');
            } else {
                $location.path('/view-1');
            }

        };
    };


    angular.module("loginModule")
            .controller("loginController", loginController);

}());
