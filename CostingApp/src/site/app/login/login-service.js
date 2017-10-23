'use strict';

angular.module("indexModule")
        .config(function ($httpProvider) {
            $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
            $httpProvider.defaults.withCredentials = true;
        });

angular.module('indexModule')
        .factory('AuthenticationService', function (systemConfig, $base64, $http, $cookieStore, $rootScope, $timeout) {
            var service = {};

            $rootScope.model = {
                name: null,
                password: null
            };


            service.Login = function (username, password, callback) {

                /* Dummy authentication for testing, uses $timeout to simulate api call
                 ----------------------------------------------*/
//                            $timeout(function () {
//                                var response = {success: username === 'test' && password === 'test'};
//                                if (!response.success) {
//                                    response.message = 'Username or password is incorrect';
//                                }
//                                callback(response);
//                            }, 1000);


                /* Use this for real authentication
                 ----------------------------------------------*/
                $rootScope.model.name = username;
                $rootScope.model.password = password;

//                var auth = username + '--' + password + ":" + password;
                var auth = username + ":" + password;
                auth = "Basic " + btoa(auth);

                var headers = {
                    "Authorization": auth,
                    "X-Requested-With": "XMLHttpRequest"
//                    "Access-Control-Allow-Origin": "*"
                };

                var url = systemConfig.apiUrl + "/api/user/login/" + $rootScope.model.name;

//                var DetailJSON = JSON.stringify($rootScope.model);

                $timeout(function () {
                    $http.get(url, {
                        'headers': headers
                    })
                            .success(function (response) {
                                console.log(response)
                                callback(response);
                            })
                            .error(function (data) {
                                $rootScope.error = 'username or password is incorrect';
                            });
                    ;

                }, 1000);

            };

            service.SetCredentials = function (username, password) {
                var authdata = btoa(username +":"+ password); //$base64.encode(username + ':' + password);

                $rootScope.globals = {
                    currentUser: {
                        username: username,
                        authdata: authdata
                    }
                };

                $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata; // jshint ignore:line
                $cookieStore.put('globals', $rootScope.globals);
            };

            service.ClearCredentials = function () {
                $rootScope.globals = {};
                $cookieStore.remove('globals');
                $http.defaults.headers.common.Authorization = 'Basic ';
            };

            return service;
        });
