(function () {
    angular.module("tierModule", ['ui-notification']);

    //http factory
    angular.module("tierModule")
            .factory("tierFactory", function ($http, systemConfig) {
                var factory = {};

                //load tires
                factory.loadTiers = function (callback) {
                    var url = systemConfig.apiUrl + "/api/tiers";

                    $http.get(url)
                            .success(function (data, status, headers) {
                                callback(data);
                            })
                            .error(function (data, status, headers) {

                            });
                };

                //save tiers
                factory.saveTier = function (tier, callback, errorCallback) {
                    var url = systemConfig.apiUrl + "/api/tiers/save-tier";


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

                //delete tiers
                factory.deleteTier = function (indexNo, callback, errorCallback) {
                    var url = systemConfig.apiUrl + "/api/tiers/delete-tier/" + indexNo;


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

    angular.module("tierModule")
            .controller("tierController", function ($scope, tierFactory, $timeout, Notification) {
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
                    $scope.model.tier = {
                        "indexNo": null,
                        "name": null
                    };
                };

                //------------------ validation functions ------------------------------
                $scope.validateInput = function () {
                    if ($scope.model.tier.name) {
                        return true;
                    } else {
                        return false;
                    }
                };

                //<-----------------http funtiion------------------->
                //save tier
                $scope.http.saveTier = function () {
                    var detail = $scope.model.tier;
                    var detailJSON = JSON.stringify(detail);

                    tierFactory.saveTier(
                            detailJSON,
                            function (data) {
                                Notification.success(data.indexNo + " - " + "Save Successfully");
                                $scope.model.tiers.unshift(data);
                                $scope.model.reset();
                            }
                    );
                };

                //delete tier
                $scope.http.deleteTier = function (indexNo) {
                    tierFactory.deleteTier(indexNo
                            , function () {
                                var id = -1;
                                for (var i = 0; i < $scope.model.tiers.length; i++) {
                                    if ($scope.model.tiers[i].indexNo === indexNo) {
                                        id = i;
                                    }
                                }
                                Notification.success(indexNo + " - " + "Tier Delete Successfully.");
                                $scope.model.tiers.splice(id, 1);
                            },
                            function (data) {
                                Notification.error(data);
                            });
                };


                //<-----------------ui funtiion--------------------->
                //save function
                $scope.ui.save = function () {
                    if ($scope.validateInput()) {
                        $scope.http.saveTier();
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

                //key event
                $scope.ui.keyEvent = function (event) {
                    if (event.keyCode === 13) {
                        $scope.ui.save();
                    }
                };

                //new function
                $scope.ui.new = function () {
                    $scope.ui.mode = "NEW";
                };

                //edit funtion
                $scope.ui.edit = function (tier,index) {
                    $scope.ui.mode = "SAVE";
                    var id = -1;
                    for (var i = 0; i < $scope.model.tiers.length; i++) {
                        if ($scope.model.tiers[i].indexNo === index) {
                            id = i;
                        }
                    }
                    $scope.model.tier = tier;
                    $scope.model.tiers.splice(id, 1);
                };


                $scope.ui.init = function () {
                    //set ideal mode
                    $scope.ui.mode = "IDEAL";

                    $scope.model.reset();
                    //load tiers
                    tierFactory.loadTiers(function (data) {
                        $scope.model.tiers = data;
                    });
                };

                $scope.ui.init();

            });


}());