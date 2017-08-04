(function () {
    angular.module("userModule", ['ui-notification']);

    //http factory
    angular.module("userModule")
            .factory("userFactory", function ($http, systemConfig) {
                var factory = {};

                //load users
                factory.loadUsers = function (callback) {
                    var url = systemConfig.apiUrl + "/api/user";

                    $http.get(url)
                            .success(function (data, status, headers) {
                                callback(data);
                            })
                            .error(function (data, status, headers) {

                            });
                };

                //save user
                factory.saveUser = function (tier, callback, errorCallback) {
                    var url = systemConfig.apiUrl + "/api/user/save-user";


                    $http.post(url, tier)
                            .success(function (data, status, headers) {
                                callback(data);
                            })
                            .error(function (data, status, headers) {
                                if (errorCallback) {
                                    errorCallback(data);
                                }
                            });

                };

                //delete user
                factory.deleteUser = function (indexNo, callback, errorCallback) {
                    var url = systemConfig.apiUrl + "/api/user/delete-user/" + indexNo;


                    $http.delete(url)
                            .success(function (data, status, headers) {
                                callback(data);
                            })
                            .error(function (data, status, headers) {
                                if (errorCallback) {
                                    errorCallback(data);
                                }
                            });

                };

                return factory;

            });

    angular.module("userModule")
            .controller("userController", function ($scope, userFactory, $timeout, Notification) {
                //data models 
                $scope.model = {};

                //ui models
                $scope.ui = {};

                //http models
                $scope.http = {};

                //current ui mode IDEAL, SELECTED, NEW, EDIT
                $scope.ui.mode = null;

                //------------------ model functions ---------------------------
                //reset model
                $scope.model.reset = function () {
                    $scope.model.user = {
                        "indexNo": null,
                        "name": null,
                        "password": null,
                        "role": null
                        
                    };
                };

                //------------------ validation functions ------------------------------
                $scope.validateInput = function () {
                    if ($scope.model.user.name 
                            && $scope.model.user.password
                            && $scope.model.user.role) {
                        return true;
                    } else {
                        return false;
                    }
                };

                //<-----------------http funtiion------------------->
                //save user
                $scope.http.saveUser = function () {
                    var detail = $scope.model.user;
                    var detailJSON = JSON.stringify(detail);

                    userFactory.saveUser(
                            detailJSON,
                            function (data) {
                                Notification.success(data.indexNo + " - " + "Save Successfully");
                                $scope.model.users.unshift(data);
                                $scope.model.reset();
                            }
                    );
                };

                //delete user
                $scope.http.deleteUser = function (indexNo) {
                    userFactory.deleteUser(indexNo
                            , function () {
                                var id = -1;
                                for (var i = 0; i < $scope.model.users.length; i++) {
                                    if ($scope.model.users[i].indexNo === indexNo) {
                                        id = i;
                                    }
                                }
                                Notification.success(indexNo + " - " + "User Delete Successfully.");
                                $scope.model.users.splice(id, 1);
                            },
                            function (data) {
                                Notification.error(data);
                            });
                };


                //<-----------------ui funtiion--------------------->
                //save function
                $scope.ui.save = function () {
                    if ($scope.validateInput()) {
                        $scope.http.saveUser();
                    } else {
                        Notification.error("Please Input Detail");
                    }
                };

                //focus
//                $scope.ui.focus = function () {
//                    $timeout(function () {
//                        document.querySelectorAll("#tier")[0].focus();
//                    }, 10);
//                };


                //new function
                $scope.ui.new = function () {
                    $scope.ui.mode = "NEW";
                };
                $scope.ui.clear = function () {
                   $scope.model.reset();
                };

                //edit funtion
                $scope.ui.edit = function (user,index) {
                    $scope.ui.mode = "SAVE";
                    var id = -1;
                    for (var i = 0; i < $scope.model.users.length; i++) {
                        if ($scope.model.users[i].indexNo === index) {
                            id = i;
                        }
                    }
                    $scope.model.user = user;
                    $scope.model.users.splice(id, 1);
                };


                $scope.ui.init = function () {
                    //set ideal mode
                    $scope.ui.mode = "IDEAL";

                    $scope.model.reset();
                    //load tiers
                    userFactory.loadUsers(function (data) {
                        $scope.model.users = data;
                    });
                };

                $scope.ui.init();

            });


}());