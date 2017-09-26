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

                //load styleHostory
                factory.loadLogfile = function (styleNo, callback) {
                    var url = systemConfig.apiUrl + "/api/logfile/style/" + styleNo;

                    $http.get(url)
                            .success(function (data, status, headers) {
                                callback(data);
                            })
                            .error(function (data, status, headers) {

                            });
                };

                //save style
                factory.saveStyle = function (index, tier, callback, errorCallback) {
                    var url = systemConfig.apiUrl + "/api/style/save-style/" + index + "/" + tier;

                    $http.post(url)
                            .success(function (data, status, headers) {
                                callback(data);
                            })
                            .error(function (data, status, headers) {
                                if (errorCallback) {
                                    errorCallback(data);
                                }
                            });

                };
                //save new style without image
                factory.saveNewStyle = function (style, callback, errorCallback) {
                    var url = systemConfig.apiUrl + "/api/style/save-new-style";

                    $http.post(url, style)
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
                factory.deleteStyle = function (indexNo, styleNo, callback, errorCallback) {
                    var url = systemConfig.apiUrl + "/api/style/delete-style/" + indexNo + "/" + styleNo;


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
            .controller("styleController", function ($rootScope, ConfirmPane, systemConfig, $scope, styleFactory, $timeout, Notification) {
                //data models 
                $scope.model = {};

                $scope.model.temp = {};

                $scope.model.style = {};

                //ui models
                $scope.ui = {};

                //http models
                $scope.http = {};



                //------------------ validation functions ------------------------------
                $scope.validateInput = function () {
                    if ($scope.model.temp.styleNo
                            && $scope.model.temp.category
                            && $scope.model.temp.tier) {
                        return true;
                    } else {
                        return false;
                    }
                };
                $scope.validateNewStyle = function () {
                    if ($scope.model.style.styleNo
                            && $scope.model.style.category
                            && $scope.model.style.solidPrice
                            && $scope.model.style.solidConsumption
                            && $scope.model.style.printPrice
                            && $scope.model.style.printConsumption
                            && $scope.model.style.linerPrice
                            && $scope.model.style.linerConsumption
                            && $scope.model.style.trimCost
//                            && $scope.model.style.handEmbellishmentCost
//                            && $scope.model.style.machineEmbellishmentCost
                            && $scope.model.style.smv
                            && $scope.model.style.cor
                            && $scope.model.tier
                            && $rootScope.dateVal === "1"
                            && $scope.imagemodel) {
                        return true;
                    } else {
                        return false;
                    }
                };

                //<-----------------http funtiion------------------->
                $scope.http.saveStyle = function () {
                    styleFactory.saveStyle(
                            $rootScope.selectedDataIndex, $scope.model.temp.tier,
                            function (data) {
                                var id = -1;
                                for (var i = 0; i < $scope.model.pendingStyles.length; i++) {
                                    if ($scope.model.pendingStyles[i].indexNo === data.indexNo) {
                                        id = i;
                                    }
                                }
                                $scope.model.pendingStyles.splice(id, 1);
                                $scope.model.temp = {};
                                $rootScope.selectedDataIndex = null;
                                Notification.success("Successfully Added..");
                                styleFactory.loadStyles(function (data) {
                                    $scope.styles = data;
                                });
                            });
                };

                //save new style
                $scope.http.saveNewStyle = function () {
                    $scope.model.style.tier = $scope.model.tier;
                    var json = JSON.stringify($scope.model.style);
                    var formData = new FormData();
                    var file = document.getElementById('file-upload').files[0];
                    if (file) {
                        var url = systemConfig.apiUrl + "/api/style/save-style";

                        formData.append("file", file);
                        formData.append("ad", json);

                        var xhr = new XMLHttpRequest();

                        xhr.onreadystatechange = function () {
                            if (this.readyState === 4 && this.status === 200) {
                                Notification.success("Successfully Added..");
                                styleFactory.loadStyles(function (data) {
                                    $scope.styles = data;
                                });
                                $scope.imagemodel = null;
                                $scope.model.style = {};
                                $rootScope.dateVal = "0";
                            }
                        };
                        xhr.open("POST", url);
                        xhr.send(formData);
                    } else {
                        styleFactory.saveNewStyle(json,
                                function (data) {
//                                    $scope.styles.unshift(data);
                                    styleFactory.loadStyles(function (data) {
                                        $scope.styles = data;
                                    });
                                    Notification.success("Successfully Added..");
                                    $scope.imagemodel = null;
                                    $scope.model.style = {};
                                    $rootScope.dateVal = "0";
                                });
                    }



                };

                //delete style
                $scope.http.deleteStyle = function (indexNo, styleNo) {
                    ConfirmPane.primaryConfirm("Are you sure you want to delete?")
                            .confirm(function () {
                                styleFactory.deleteStyle(indexNo, styleNo
                                        , function () {
                                            var id = -1;
                                            for (var i = 0; i < $scope.styles.length; i++) {
                                                if ($scope.styles[i].indexNo === indexNo) {
                                                    id = i;
                                                }
                                            }
                                            Notification.success(indexNo + " - " + "Style Delete Successfully.");
                                            $scope.styles.splice(id, 1);
                                        },
                                        function (data) {
//                                Notification.error(data);
                                        });
                            });
                };

                //get style image
                $scope.getImage = function (path) {
                    var url = systemConfig.apiUrl + "/api/style/app-image/" + path;
                    return url;
                };


                //<-----------------ui funtiion--------------------->
                $scope.ui.selectStyle = function (indexNo) {
                    $rootScope.selectedDataIndex = indexNo;
                    angular.forEach($scope.model.pendingStyles, function (value) {
                        if (value.indexNo === indexNo) {
                            $scope.model.temp.styleNo = value.styleNo;
                            $scope.model.temp.category = value.category;
                        }
                    });
                };

                $scope.ui.saveNewStyle = function () {
                    if ($scope.validateNewStyle()) {
                        $scope.http.saveNewStyle();
                    } else {
                        Notification.error("please input values");
                    }
                };

                $scope.ui.changeDate = function (val) {
                    if (val) {
                        $rootScope.dateVal = "1";
                    }
                };


                // upload file
                $scope.imageUpload = function (event) {
                    //FileList object
                    var files = event.target.files;

                    for (var i = 0; i < files.length; i++) {
                        var file = files[i];
                        $rootScope.imageName = file.name;
                        var reader = new FileReader();
                        reader.onload = $scope.imageIsLoaded;
                        reader.readAsDataURL(file);
                    }
                };

                $scope.imageIsLoaded = function (e) {
                    $scope.$apply(function () {
                        $scope.imagemodel = e.target.result;
                    });
                };

                $scope.ui.new = function () {
                    $scope.ui.mode = "NEW";
                };
                $scope.ui.close = function () {
                    $scope.ui.mode = "IDEAL";
                };

                $scope.ui.save = function () {
                    if ($scope.validateInput()) {
                        $scope.http.saveStyle();
                    } else {
                        Notification.error("value empty");
                    }
                };

                $scope.ui.selectTier = function (tier) {
                    $scope.model.styleTemp = new Array();

                    //load styles
                    styleFactory.loadStyles(function (data) {
                        $scope.styles = data;
                        angular.forEach($scope.styles, function (data) {
                            angular.forEach(data.tier, function (tiers) {
                                if (tiers === tier) {
                                    $scope.model.styleTemp.push(data);
                                    $scope.styles = $scope.model.styleTemp;
                                }
                            });
                        });
                    });
                };

                //edit funtion
                $scope.ui.edit = function (style, index) {
                    var id = -1;
                    for (var i = 0; i < $scope.styles.length; i++) {
                        if ($scope.styles[i].indexNo === index) {
                            id = i;
                        }
                    }
                    $scope.styles.splice(id, 1);
                    $scope.model.style = style;
                    $rootScope.dateVal === "0";
                    $scope.imagemodel = $scope.getImage(style.picture);
                    $scope.model.tier = style.tier;
                };

                $scope.onSelect = function ($item, $model, $label) {
                    $scope.model.tier = $item;
                };

                $scope.showMore = function () {
                    $scope.numLimit += 5;
                };

                $scope.ui.selectHistory = function (style) {
                    styleFactory.loadLogfile(style.styleNo,
                            function (data) {
                                $scope.styleHistory = data;

                            });
                };


                $scope.ui.init = function () {
                    $scope.numLimit = 15;
                    //mode
                    $scope.ui.mode = "IDEAL";
                    //date change status
                    if (!$rootScope.dateVal) {
                        $rootScope.dateVal === "0";
                    }


                    //load styles
                    styleFactory.loadStyles(function (data) {
                        $scope.styles = data;
                        $scope.model.pendingStyles = [];
                        angular.forEach(data, function (value) {
                            if (value.tier === null) {
                                $scope.model.pendingStyles.push(value);
                            }
                        });

                    });

                    //load Tiers
                    styleFactory.loadTiers(function (data) {
                        $scope.model.tiers = data;
                    });


                };

                $scope.ui.init();

            });


}());