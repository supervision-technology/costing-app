(function () {
    'use strict';

    //-----------http controller---------
    angular.module("indexModule")
            .controller("LoginController", function ($http, systemConfig, $scope, $rootScope, $location, AuthenticationService) {
                //ui models
                $scope.ui = {};

                // reset login status
                AuthenticationService.ClearCredentials();

                $scope.login = function () {
                    $rootScope.error = null;
                    AuthenticationService.Login($scope.username, $scope.password, function (response) {
                        if (response) {
                            $rootScope.loading = null;
                            AuthenticationService.SetCredentials($scope.username, $scope.password);
                            $rootScope.UserMode = response.role;
//                            $rootScope.userName = response.name;
                            $rootScope.user = response;
                            if (response.role === 'admin') {
                                $location.path('/admin');
                            } else {
                                $location.path('/view-1');
                            }

                        } else {
//                            $rootScope.error = 'Username or password is incorrect';
                        }
                    });
                };

            });
}());
