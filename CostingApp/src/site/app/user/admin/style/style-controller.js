(function () {
    angular.module("styleModule", ['ui-notification']);

    //http factory
    angular.module("styleModule")
            .factory("styleFactory", function ($http, systemConfig) {
                var factory = {};

                //load styles
                factory.loadStyles = function (callback) {
                    var url = systemConfig.apiUrl + "/api/style";

                    $http.get(url)
                            .success(function (data, status, headers) {
                                callback(data);
                            })
                            .error(function (data, status, headers) {

                            });
                };

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

                //save style
                factory.saveStyle = function (tier, callback, errorCallback) {
                    var url = systemConfig.apiUrl + "/api/style/save-style";


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

                //delete style
                factory.deleteStyle = function (indexNo, callback, errorCallback) {
                    var url = systemConfig.apiUrl + "/api/style/delete-style/" + indexNo;


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

    angular.module("styleModule")
            .controller("styleController", function ($scope, styleFactory, $timeout, Notification) {
                //data models 
                $scope.model = {};

                //ui models
                $scope.ui = {};

                //http models
                $scope.http = {};


                //<-----------------http funtiion------------------->
                //delete style
                $scope.http.deleteStyle = function (indexNo) {
                    styleFactory.deleteStyle(indexNo
                            , function () {
                                var id = -1;
                                for (var i = 0; i < $scope.model.styles.length; i++) {
                                    if ($scope.model.styles[i].indexNo === indexNo) {
                                        id = i;
                                    }
                                }
                                Notification.success(indexNo + " - " + "Tier Delete Successfully.");
                                $scope.model.styles.splice(id, 1);
                            },
                            function (data) {
                                Notification.error(data);
                            });
                };


                //<-----------------ui funtiion--------------------->
                $scope.ui.selectStyle = function (indexNo) {
                    $scope.ui.mode = "SAVE";
                    $scope.ui.selectedDataIndex = indexNo;
                    angular.forEach($scope.model.styles, function (value) {
                        if (value.indexNo === indexNo) {
                            console.log(value);
                            $scope.model.styleNo = value.styleNo;
                            $scope.model.category = value.category;
                            $scope.model.solidPrice = value.solidPrice;
                            $scope.model.solidConsumption = value.solidConsumption;
                            $scope.model.printPrice = value.printPrice;
                            $scope.model.printConsumption = value.printConsumption;
                            $scope.model.linerCost = value.linerPrice;
                            $scope.model.linerConsumption = value.linerConsumption;
                            $scope.model.trimCost = value.trimCost;
                            $scope.model.cupCost = value.cupCost;
                            $scope.model.machineEmbellishment = value.machineEmbellishmentCost;
                            $scope.model.handEmbellishment = value.handEmbellishmentCost;
                            $scope.model.smv = value.smv;
                            $scope.model.cor = value.cor;
                            $scope.model.picture = value.picture;
                        }
                    });
                };

                $scope.ui.new = function () {
                    $scope.ui.mode = "NEW";
                };

                $scope.ui.save = function () {
                    $scope.ui.mode = "IDEAL";
                };


                $scope.ui.init = function () {
                    //mode
                    $scope.ui.mode = "IDEAL";

                    //load styles
                    styleFactory.loadStyles(function (data) {
                        $scope.model.styles = data;
                    });

                    //load Tiers
                    styleFactory.loadTiers(function (data) {
                        $scope.model.tiers = data;
                    });


                };

                $scope.ui.init();

            });


}());