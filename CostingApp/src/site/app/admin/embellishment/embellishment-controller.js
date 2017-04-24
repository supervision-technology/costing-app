(function () {
    angular.module("embellishmentModule", ['ui-notification']);

    //http factory
    angular.module("embellishmentModule")
            .factory("embellishmentFactory", function ($http, systemConfig) {
                var factory = {};

                //load embellishment
                factory.loadEmbellishment = function (callback) {
                    var url = systemConfig.apiUrl + "/api/embellishment";

                    $http.get(url)
                            .success(function (data, status, headers) {
                                callback(data);
                            })
                            .error(function (data, status, headers) {

                            });
                };

                //save embellishment
                factory.saveEmbellishment = function (emb, callback, errorCallback) {
                    var url = systemConfig.apiUrl + "/api/embellishment/save-embellishment";


                    $http.post(emb, tier)
                            .success(function (data, status, headers) {
                                callback(data);
                            })
                            .error(function (data, status, headers) {
                                if (errorCallback) {
                                    errorCallback(data);
                                }
                            });

                };

                //delete embellishment
                factory.deleteEmbellishment = function (indexNo, callback, errorCallback) {
                    var url = systemConfig.apiUrl + "/api/embellishment/delete-embellishment/" + indexNo;


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

    angular.module("embellishmentModule")
            .controller("embellishmentController", function ($scope, embellishmentFactory, $timeout, Notification) {
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
                    $scope.model.embellishment = {
                        "indexNo": null,
                        "type": null,
                        "tier": null,
                        "price": null
                    };
                };

                //------------------ validation functions ------------------------------
                $scope.validateInput = function () {
                    if ($scope.model.embellishment.type) {
                        return true;
                    } else {
                        return false;
                    }
                };

                //<-----------------http funtiion------------------->
                //save tier
                $scope.http.saveEmbellishment = function () {
                    var detail = $scope.model.tier;
                    var detailJSON = JSON.stringify(detail);

                    embellishmentFactory.saveEmbellishment(
                            detailJSON,
                            function (data) {
                                Notification.success(data.indexNo + " - " + "Save Successfully");
                                $scope.model.embellishments.push(data);
                                $scope.model.reset();
                            }
                    );
                };

                //delete tier
                $scope.http.deleteEmbellshment = function (indexNo) {
                    embellishmentFactory.deleteEmbellishment(indexNo
                            , function () {
                                var id = -1;
                                for (var i = 0; i < $scope.model.embellishments.length; i++) {
                                    if ($scope.model.embellishments[i].indexNo === indexNo) {
                                        id = i;
                                    }
                                }
                                Notification.success(indexNo + " - " + "Tier Delete Successfully.");
                                $scope.model.embellishments.splice(id, 1);
                            },
                            function (data) {
                                Notification.error(data);
                            });
                };


                //<-----------------ui funtiion--------------------->
                //save function
                $scope.ui.save = function () {
                    if ($scope.validateInput()) {
                        $scope.http.saveEmbellishment()();
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
                $scope.ui.edit = function (emb, index) {
                    $scope.ui.mode = "SAVE";
                    var id = -1;
                    for (var i = 0; i < $scope.model.embellishments.length; i++) {
                        if ($scope.model.embellishments[i].indexNo === index) {
                            id = i;
                        }
                    }
                    $scope.model.embellishment = emb;
                    $scope.model.embellishments.splice(id, 1);
                };


                $scope.ui.init = function () {
                    //set ideal mode
                    $scope.ui.mode = "IDEAL";

                    $scope.model.reset();
                    //load tiers
                    embellishmentFactory.loadEmbellishment(function (data) {
                        $scope.model.embellishments = data;
                    });
                };

                $scope.ui.init();

            });


}());