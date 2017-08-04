(function () {
    angular.module("loginModule", ["ngAnimate"]);


    var loginController = function ($scope, $location,Notification) {


        $scope.login = function (name, password) {
            if (name === "admin" && password === "admin") {
                $location.path('/admin');
            } else if (name === "user" && password === "user") {
                $location.path('/view-1');
            }else{
                Notification.error("User name or Password wrong");
            }

        };


    };


    angular.module("loginModule")
            .controller("loginController", loginController);

}());
