(function () {
    angular.module("viewModule", ["ngAnimate"]);


    var viewController = function ($http, $scope, $rootScope, systemConfig) {
        $scope.qty = 1;

        if (!$rootScope.packingCostSolid) {
            $scope.packingCostSolid = 0.36;
        }
        if (!$rootScope.packingCostPrint) {
            $scope.packingCostPrint = 0.36;
        }
        //styles detals
        $scope.styles = [];
        //emblishment detals
        $scope.embllishments = [];

        //----------------http funtions with privilages--------------------
        //get emblishment details
        var url = systemConfig.apiUrl + "/api/emblishment/all-emblishment";

        $http.get(url)
                .success(function (data) {
                    $scope.embllishments = data;
                });

        //get styles 
        if ($rootScope.top === 1) {
            var url = systemConfig.apiUrl + "/api/style/all-top-style";

            $http.get(url)
                    .success(function (data) {
                        $scope.styles = data;
                    });
        }

        if ($rootScope.bottom === 2) {
            var url = systemConfig.apiUrl + "/api/style/all-bottom-style";

            $http.get(url)
                    .success(function (data) {
                        $scope.styles = data;
                    });
        }

        //menu funtions
        $scope.selectTop = function () {
            $rootScope.bottom = 0;
            $scope.top = 1;
            $rootScope.top = $scope.top;
        };

        $scope.selectBottom = function () {
            $rootScope.top = 0;
            $scope.bottom = 2;
            $rootScope.bottom = $scope.bottom;
        };


        //----------------ui funtions-----------------------
        //get fabric cost
        $scope.getfabricCostDetails = function (styles) {
            $scope.fabricCost = styles;
            $scope.selectPicture = $scope.fabricCost.picture;
            $scope.solidPrice = $scope.fabricCost.solidPrice;
            $scope.solidConsumption = $scope.fabricCost.solidConsumption;
            $scope.printPrice = $scope.fabricCost.printPrice;
            $scope.printConsumption = $scope.fabricCost.printConsumption;

            $rootScope.selectPicture = $scope.selectPicture;
            $rootScope.solidPrice = $scope.solidPrice;
            $rootScope.solidConsumption = $scope.solidConsumption;
            $rootScope.printPrice = $scope.printPrice;
            $rootScope.printConsumption = $scope.printConsumption;

            $rootScope.fabSolid = $rootScope.solidPrice * $rootScope.solidConsumption;
            $rootScope.fabSolid = Math.round($rootScope.fabSolid * 100) / 100;

            $rootScope.fabPrint = $rootScope.printPrice * $rootScope.printConsumption;
            $rootScope.fabPrint = Math.round($rootScope.fabPrint * 100) / 100;
        };

        //get trim cost
        $scope.getTrimCostDetails = function (styles) {
            $scope.trimCost = styles.trimCost;

            $rootScope.trimCost = $scope.trimCost;
        };

        //get embllishment cost
        $scope.getEmbllishmentCostDetails = function (embllishment) {
            $rootScope.embCost = embllishment.price;
            $scope.calculateEmd();
        };

        //get cm and smv cost 
        $scope.getCMCostDetails = function (styles) {
            $rootScope.smv = styles.smv;
            $rootScope.cor = styles.cor;

            $rootScope.cmCost = $rootScope.smv * $rootScope.cor;
            $rootScope.cmCost = Math.round($rootScope.cmCost * 100) / 100;
        };

        //view-3 funtions
        $scope.solidIncrement = function () {
            $rootScope.solidPrice += 0.01;
            $rootScope.solidPrice = Math.round($rootScope.solidPrice * 100) / 100;
            $scope.calculateSolid();
        };

        $scope.solidDecrement = function () {
            $rootScope.solidPrice -= 0.01;
            $rootScope.solidPrice = Math.round($rootScope.solidPrice * 100) / 100;
            $scope.calculateSolid();
        };

        $scope.solidConsumptionIncrement = function () {
            $rootScope.solidConsumption += 0.01;
            $rootScope.solidConsumption = Math.round($rootScope.solidConsumption * 100) / 100;
            $scope.calculateSolid();
        };

        $scope.solidConsumptionDecrement = function () {
            $rootScope.solidConsumption -= 0.01;
            $rootScope.solidConsumption = Math.round($rootScope.solidConsumption * 100) / 100;
            $scope.calculateSolid();
        };

        $scope.printIncrement = function () {
            $rootScope.printPrice += 0.01;
            $rootScope.printPrice = Math.round($rootScope.printPrice * 100) / 100;
            $scope.calculatePrint();
        };

        $scope.printDecrement = function () {
            $rootScope.printPrice -= 0.01;
            $rootScope.printPrice = Math.round($rootScope.printPrice * 100) / 100;
            $scope.calculatePrint();
        };

        $scope.printConsumptionIncrement = function () {
            $rootScope.printConsumption += 0.01;
            $rootScope.printConsumption = Math.round($rootScope.printConsumption * 100) / 100;
            $scope.calculatePrint();
        };

        $scope.printConsumptionDecrement = function () {
            $rootScope.printConsumption -= 0.01;
            $rootScope.printConsumption = Math.round($rootScope.printConsumption * 100) / 100;
            $scope.calculatePrint();
        };


        //view-3 other funtion
        $scope.calculateSolid = function () {
            $rootScope.fabSolid = $rootScope.solidPrice * $scope.solidConsumption;
            $rootScope.fabSolid = Math.round($rootScope.fabSolid * 100) / 100;
        };

        $scope.calculatePrint = function () {
            $rootScope.fabPrint = $rootScope.printPrice * $rootScope.printConsumption;
            $rootScope.fabPrint = Math.round($rootScope.fabPrint * 100) / 100;
        };


        //view-5 funtions
        $scope.trimCostIncrement = function () {
            $scope.trimCost += 0.01;
            $scope.trimCost = Math.round($scope.trimCost * 100) / 100;
            $rootScope.trimCost = $scope.trimCost;
        };

        $scope.trimCostDecrement = function () {
            $scope.trimCost -= 0.01;
            $scope.trimCost = Math.round($scope.trimCost * 100) / 100;
            $rootScope.trimCost = $scope.trimCost;
        };

        //view-6 funtions
        $scope.embCostIncrement = function () {
            $rootScope.embCost += 0.01;
            $rootScope.embCost = Math.round($rootScope.embCost * 100) / 100;
            $scope.calculateEmd();
        };

        $scope.embCostDecrement = function () {
            $rootScope.embCost -= 0.01;
            $rootScope.embCost = Math.round($rootScope.embCost * 100) / 100;
            $scope.calculateEmd();
        };

        $scope.qtyIncrement = function () {
            $scope.qty += 1;
            $scope.qty = Math.round($scope.qty * 100) / 100;
            $rootScope.qty = $scope.qty;
            $scope.calculateEmd();
        };

        $scope.qtyDecrement = function () {
            $scope.qty -= 1;
            $scope.qty = Math.round($scope.qty * 100) / 100;
            $rootScope.qty = $scope.qty;
            $scope.calculateEmd();
        };

        $scope.calculateEmd = function () {
            $rootScope.emdTotal = $rootScope.embCost * $scope.qty;
            $rootScope.emdTotal = Math.round($rootScope.emdTotal * 100) / 100;
        };

        $scope.skip = function () {
            $rootScope.emdTotal = 0;
        };


        //view-8 funtions
        $scope.smvIncrement = function () {
            $rootScope.smv += 0.01;
            $rootScope.smv = Math.round($rootScope.smv * 100) / 100;
            $scope.calculateCm();
        };

        $scope.smvDecrement = function () {
            $rootScope.smv -= 0.01;
            $rootScope.smv = Math.round($rootScope.smv * 100) / 100;
            $scope.calculateCm();
        };

        $scope.corIncrement = function () {
            $rootScope.cor += 0.01;
            $rootScope.cor = Math.round($rootScope.cor * 100) / 100;
            $scope.calculateCm();
        };

        $scope.corDecrement = function () {
            $rootScope.cor -= 0.01;
            $rootScope.cor = Math.round($rootScope.cor * 100) / 100;
            $scope.calculateCm();
        };

        //view-8 other funtions
        $scope.calculateCm = function () {
            $rootScope.cmCost = $rootScope.smv * $rootScope.cor;
            $rootScope.cmCost = Math.round($rootScope.cmCost * 100) / 100;
        };


        //view-9 funtions
        $rootScope.calculateInitialFobSolid = function () {
            var fob =
                    parseFloat($scope.fabSolid)
                    + parseFloat($scope.trimCost)
                    + parseFloat($scope.emdTotal)
                    + parseFloat($scope.cmCost)
                    + parseFloat($scope.packingCostSolid);
            fob = Math.round(fob * 100) / 100;
            $scope.changePackingCostSolid();
            $scope.changeFabCostSolid();
            $scope.changeTrimCost();
            $scope.changeEmdTotal();
            $scope.changCmCost();
            return fob;
        };

        $scope.changePackingCostSolid = function () {
            $rootScope.packingCostSolid = $scope.packingCostSolid;
        };

        $scope.changeFabCostSolid = function () {
            $rootScope.fabSolid = $scope.fabSolid;
        };

        $scope.changeTrimCost = function () {
            $rootScope.trimCost = $scope.trimCost;
        };

        $scope.changeEmdTotal = function () {
            $rootScope.emdTotal = $scope.emdTotal;
        };

        $scope.changCmCost = function () {
            $rootScope.cmCost = $scope.cmCost;
        };

        $scope.calculatTargetFobSolid = function () {
            $rootScope.retailPriceSolid = $scope.retailPriceSolid;
            $scope.targetFobSolid = $rootScope.retailPriceSolid / 4;
            $rootScope.targetFobSolid = $scope.targetFobSolid;
        };

        $scope.changeTargetFobSolid = function () {
            $rootScope.targetFobSolid = $scope.targetFobSolid;
        };


        //view-10 funtions
        $rootScope.calculateInitialFobPrint = function () {
            var fob =
                    parseFloat($scope.fabPrint)
                    + parseFloat($scope.trimCost)
                    + parseFloat($scope.emdTotal)
                    + parseFloat($scope.cmCost)
                    + parseFloat($scope.packingCostPrint);
            fob = Math.round(fob * 100) / 100;
            $scope.changePackingCostPrint();
            $scope.changeFabCostSolid();
            $scope.changeTrimCost();
            $scope.changeEmdTotal();
            $scope.changCmCost();
            return fob;

        };
        $scope.changePackingCostPrint = function () {
            $rootScope.packingCostPrint = $scope.packingCostPrint;
        };

        $scope.calculatTargetFobPrint = function () {
            $rootScope.retailPricePrint = $scope.retailPricePrint;
            $scope.targetFobPrint = $rootScope.retailPricePrint / 4;
            $rootScope.targetFobPrint = $scope.targetFobPrint;
        };

        $scope.changeTargetFobPrint = function () {
            $rootScope.targetFobPrint = $scope.targetFobPrint;
        };

        //view-12 funtiions
//        $scope.imageSelected = function (input) {
//            if (input.files) {
//                var reader = new FileReader();
//
//                reader.onload = function (e) {
//                    angular.element(document.querySelector('#img-save'))
//                            .attr('src', e.target.result);
//                };
//
//                reader.readAsDataURL(input.files[0]);
//            }
//        };
        //the image
        $scope.uploadme;

        $scope.uploadImage = function () {
            var fd = new FormData();
            var imgBlob = dataURItoBlob($scope.uploadme);
            fd.append('file', imgBlob);
//            console.log(imgBlob);

//            var obj = {
//                file: imgBlob
//            };
//            var newObj = JSON.stringify(imgBlob);
//            console.log(newObj);

            var url = systemConfig.apiUrl + "/upload-file";

            $http.post(
                    url,
                    fd, {
                        transformRequest: angular.identity,
                        headers: {'Content-Type': 'undefined'}
                    }
            )
                    .success(function (response) {
                        console.log('successss', response);
                    })
                    .error(function (response) {
                        console.log('error', response);
                    });
        };


        //you need this function to convert the dataURI
        function dataURItoBlob(dataURI) {
            var binary = atob(dataURI.split(',')[1]);
            var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
            var array = [];
            for (var i = 0; i < binary.length; i++) {
                array.push(binary.charCodeAt(i));
            }
            return new Blob([new Uint8Array(array)], {
                type: mimeString
            });
        }

    };

    //your directive
    angular.module("viewModule")
            .directive("fileread", [
                function () {
                    return {
                        scope: {
                            fileread: "="
                        },
                        link: function (scope, element, attributes) {
                            element.bind("change", function (changeEvent) {
                                var reader = new FileReader();
                                reader.onload = function (loadEvent) {
                                    scope.$apply(function () {
                                        scope.fileread = loadEvent.target.result;
                                    });
                                },
                                        reader.readAsDataURL(changeEvent.target.files[0]);
                            });
                        }
                    };
                }
            ]);

    angular.module("viewModule")
            .controller("viewController", viewController);

}());


