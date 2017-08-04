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

                //load embellishment tiers
                factory.loadEmbellishmentTiers = function (callback) {
                    var url = systemConfig.apiUrl + "/api/embellishment/emb-tier";

                    $http.get(url)
                            .success(function (data, status, headers) {
                                callback(data);
                            })
                            .error(function (data, status, headers) {

                            });
                };

                //save embellishment
                factory.saveEmbellishment = function (emb, callback, errorCallback) {
                    var url = systemConfig.apiUrl + "/api/embellishment/save-embellishment2";


                    $http.post(url, emb)
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
            .controller("embellishmentController", function ($http,ConfirmPane, $rootScope, $scope, systemConfig, embellishmentFactory, $timeout, Notification) {
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
                        "price": null,
                        "smv": null,
                        "chargeOut": null

                    };
                };

                //------------------ validation functions ------------------------------
                $scope.validateInput = function () {
                    if ($scope.model.embellishment.type
                            && $scope.model.embellishment.tier
                            && $scope.model.embellishment.price) {
                        return true;
                    } else {
                        return false;
                    }
                };

                //<-----------------http funtiion------------------->
                // save embellishment
                $scope.http.saveEmbellishment = function () {
                    var formData = new FormData();
                    var file = document.getElementById('file-upload').files[0];
                    var json = JSON.stringify($scope.model.embellishment);

                    if (file) {
                        var url = systemConfig.apiUrl + "/api/embellishment/save-embellishment";

                        formData.append("file", file);
                        formData.append("ad", json);

                        var xhr = new XMLHttpRequest();

                        xhr.onreadystatechange = function () {
                            if (this.readyState === 4 && this.status === 200) {
                                embellishmentFactory.loadEmbellishment(function (data) {
                                    $scope.model.embellishments = data;
                                });
                                $scope.model.reset();
                                $scope.imagemodel = null;
                                Notification.success("Successfully Added..");
                            }
                        };
                        xhr.open("POST", url);
                        xhr.send(formData);
                    } else {
                        embellishmentFactory.saveEmbellishment(
                                json,
                                function (data) {
                                    $scope.model.embellishments.unshift(data);
                                    $scope.model.reset();
                                    $scope.imagemodel = null;
                                    Notification.success("Successfully Added..");
                                });
                    }
                };

                //delete embelishment
                $scope.http.deleteEmbellishment = function (indexNo) {
                    ConfirmPane.primaryConfirm("Are you sure you want to delete?")
                            .confirm(function () {
                                embellishmentFactory.deleteEmbellishment(indexNo
                                        , function () {
                                            var id = -1;
                                            for (var i = 0; i < $scope.model.embellishments.length; i++) {
                                                if ($scope.model.embellishments[i].indexNo === indexNo) {
                                                    id = i;
                                                }
                                            }
                                            Notification.success(indexNo + " - " + "Embellishment delete successfully.");
                                            $scope.model.embellishments.splice(id, 1);
                                        },
                                        function (data) {
                                            Notification.error(data);
                                        });
                            });
                };

                //get embellishment image
                $scope.getImage = function (path) {
                    var url = systemConfig.apiUrl + "/api/style/app-image/" + path;
                    return url;
                };

                $scope.changeEmbellishment = function (embellishment) {
                    var url = systemConfig.apiUrl + "/api/embellishment/find-tier/" + embellishment;
                    $http.get(url)
                            .success(function (data) {
                                $scope.model.tiers = data;
                            })
                            .error(function () {

                            });

                };

                //<-----------------ui funtiion--------------------->
                //save function
                $scope.ui.save = function () {
                    if ($scope.validateInput()) {
                        if ($scope.imagemodel) {
                            $scope.http.saveEmbellishment();
                        } else {
                            Notification.error("Image is empty");
                        }
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
                    $scope.model.embellishments.splice(id, 1);
                    $scope.model.embellishment = emb;
                    $scope.imagemodel = $scope.http.getPicture(emb.picture);
                };


                $scope.showMore = function () {
                    $scope.numLimit += 5;
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


                $scope.ui.init = function () {
                    $scope.numLimit = 15;
                    //set ideal mode
                    $scope.ui.mode = "IDEAL";

                    $scope.model.reset();
                    //load tiers
                    embellishmentFactory.loadEmbellishment(function (data) {
                        $scope.model.embellishments = data;
                    });

                    embellishmentFactory.loadEmbellishmentTiers(function (data) {
                        $scope.model.tiers = data;
                    });
                };

                $scope.ui.init();

            });


}());