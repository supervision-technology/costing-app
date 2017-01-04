(function () {
    angular.module("viewModule", ["ngAnimate"]);


    var viewController = function ($http, $scope, $rootScope, systemConfig) {
        $scope.embllishment1 = 0.40;
        $scope.embllishment2 = 0.20;
        $scope.embllishment3 = 0.25;
        $scope.embllishment4 = 0.60;

        //main menu list
//        $scope.categorys = [];
//
//        var url = systemConfig.apiUrl + "/api/menu-category";
//
//        $http.get(url)
//                .success(function (data) {
//                    $scope.categorys = data.categorys;
//                });

        // get styles 
//        $scope.styles = [];
//
//        var url = systemConfig.apiUrl + "/api/style";
//
//        $http.get(url)
//                .success(function (data) {
//                    $scope.styles = data.styles;
//                    console.log(data.styles);
//                });




        if ($rootScope.solid) {
        } else {
            $scope.solid = 3.67;
        }
        if ($rootScope.solidConsumption) {
        } else {
            $scope.solidConsumption = 0.12;
        }
        if ($rootScope.print) {
        } else {
            $scope.print = 5.47;
        }
        if ($rootScope.printConsumption) {
        } else {
            $scope.printConsumption = 0.14;
        }
        if ($rootScope.fabSolid) {
        } else {
            $scope.fabSolid = $scope.solid * $scope.solidConsumption;
            $scope.fabSolid = Math.round($scope.fabSolid * 100) / 100;
        }
        if ($rootScope.fabPrint) {
        } else {
            $scope.fabPrint = $scope.print * $scope.printConsumption;
            $scope.fabPrint = Math.round($scope.fabPrint * 100) / 100;
        }
        if ($rootScope.trimCost) {
        } else {
            $scope.trimCost = 0.44;
        }
        if ($rootScope.qty) {
        } else {
            $scope.qty = 1;
        }
        if ($rootScope.cmv) {
        } else {
            $scope.cmv = 5.00;
        }
        if ($rootScope.cor) {
        } else {
            $scope.cor = 0.24;
        }
        if ($rootScope.cmCost) {
        } else {
            $scope.cmCost = $scope.cmv * $scope.cor;
            $scope.cmCost = Math.round($scope.cmCost * 100) / 100;
        }
        if ($rootScope.retailPriceSolid) {
        } else {
            $scope.retailPriceSolid = "";
        }
        if ($rootScope.retailPricePrint) {
        } else {
            $scope.retailPricePrint = "";
        }
        if ($rootScope.packingCostSolid) {
        } else {
            $scope.packingCostSolid = 0.36;
        }
        if ($rootScope.packingCostPrint) {
        } else {
            $scope.packingCostPrint = 0.36;
        }
        if ($rootScope.targetFobSolid) {
        } else {
            $scope.targetFobSolid = "";
        }
        if ($rootScope.targetFobPrint) {
        } else {
            $scope.targetFobPrint = "";
        }

        //form 2 funtions
        $scope.setFabricCost = function (indexNo) {
            console.log(indexNo);
        };


        //view-3 funtions
        $scope.solidIncrement = function () {
            $scope.solid += 0.01;
            $scope.solid = Math.round($scope.solid * 100) / 100;
            $rootScope.solid = $scope.solid;
            $scope.calculateSolid();
        };

        $scope.solidDecrement = function () {
            $scope.solid -= 0.01;
            $scope.solid = Math.round($scope.solid * 100) / 100;
            $rootScope.solid = $scope.solid;
            $scope.calculateSolid();
        };

        $scope.solidConsumptionIncrement = function () {
            $scope.solidConsumption += 0.01;
            $scope.solidConsumption = Math.round($scope.solidConsumption * 100) / 100;
            $rootScope.solidConsumption = $scope.solidConsumption;
            $scope.calculateSolid();
        };

        $scope.solidConsumptionDecrement = function () {
            $scope.solidConsumption -= 0.01;
            $scope.solidConsumption = Math.round($scope.solidConsumption * 100) / 100;
            $rootScope.solidConsumption = $scope.solidConsumption;
            $scope.calculateSolid();
        };

        $scope.printIncrement = function () {
            $scope.print += 0.01;
            $scope.print = Math.round($scope.print * 100) / 100;
            $rootScope.print = $scope.print;
            $scope.calculatePrint();
        };

        $scope.printDecrement = function () {
            $scope.print -= 0.01;
            $scope.print = Math.round($scope.print * 100) / 100;
            $rootScope.print = $scope.print;
            $scope.calculatePrint();
        };

        $scope.printConsumptionIncrement = function () {
            $scope.printConsumption += 0.01;
            $scope.printConsumption = Math.round($scope.printConsumption * 100) / 100;
            $rootScope.printConsumption = $scope.printConsumption;
            $scope.calculatePrint();
        };

        $scope.printConsumptionDecrement = function () {
            $scope.printConsumption -= 0.01;
            $scope.printConsumption = Math.round($scope.printConsumption * 100) / 100;
            $rootScope.printConsumption = $scope.printConsumption;
            $scope.calculatePrint();
        };


        //view-3 other funtion
        $scope.calculateSolid = function () {
            $scope.fabSolid = $scope.solid * $scope.solidConsumption;
            $scope.fabSolid = Math.round($scope.fabSolid * 100) / 100;
            $rootScope.fabSolid = $scope.fabSolid;
        };

        $scope.calculatePrint = function () {
            $scope.fabPrint = $scope.print * $scope.printConsumption;
            $scope.fabPrint = Math.round($scope.fabPrint * 100) / 100;
            $rootScope.fabPrint = $scope.fabPrint;
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
        $scope.clickEmbellishment1 = function () {
            $rootScope.embCost = $scope.embllishment1;
            $scope.calculateEmd();
        };

        $scope.clickEmbellishment2 = function () {
            $rootScope.embCost = $scope.embllishment2;
            $scope.calculateEmd();
        };

        $scope.clickEmbellishment3 = function () {
            $rootScope.embCost = $scope.embllishment3;
            $scope.calculateEmd();
        };

        $scope.clickEmbellishment4 = function () {
            $rootScope.embCost = $scope.embllishment4;
            $scope.calculateEmd();
        };

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
            $scope.emdTotal = $rootScope.embCost * $scope.qty;
            $scope.emdTotal = Math.round($scope.emdTotal * 100) / 100;
            $rootScope.emdTotal = $scope.emdTotal;
        };
        
        $scope.skip = function (){
             $rootScope.emdTotal=0;
        };


        //view-8 funtions
        $scope.smvIncrement = function () {
            $scope.cmv += 0.01;
            $scope.cmv = Math.round($scope.cmv * 100) / 100;
            $rootScope.cmv = $scope.cmv;
            $scope.calculateCm();
        };

        $scope.smvDecrement = function () {
            $scope.cmv -= 0.01;
            $scope.cmv = Math.round($scope.cmv * 100) / 100;
            $rootScope.cmv = $scope.cmv;
            $scope.calculateCm();
        };

        $scope.corIncrement = function () {
            $scope.cor += 0.01;
            $scope.cor = Math.round($scope.cor * 100) / 100;
            $rootScope.cor = $scope.cor;
            $scope.calculateCm();
        };

        $scope.corDecrement = function () {
            $scope.cor -= 0.01;
            $scope.cor = Math.round($scope.cor * 100) / 100;
            $rootScope.cor = $scope.cor;
            $scope.calculateCm();
        };

        //view-8 other funtions
        $scope.calculateCm = function () {
            $scope.cmCost = $scope.cmv * $scope.cor;
            $scope.cmCost = Math.round($scope.cmCost * 100) / 100;
            $rootScope.cmCost = $scope.cmCost;

        };


        //view-9 funtions
        $scope.calculatTargetFobSolid = function () {
            $rootScope.retailPriceSolid = $scope.retailPriceSolid;
            $scope.targetFobSolid = $rootScope.retailPriceSolid / 4;
            $rootScope.targetFobSolid = $scope.targetFobSolid;
        };

        $scope.changeTargetFobSolid = function () {
            $rootScope.targetFobSolid = $scope.targetFobSolid;
        };

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



        //view-10 funtions
        $scope.calculatTargetFobPrint = function () {
            $rootScope.retailPricePrint = $scope.retailPricePrint;
            $scope.targetFobPrint = $rootScope.retailPricePrint / 4;
            $rootScope.targetFobPrint = $scope.targetFobPrint;
        };

        $scope.changeTargetFobPrint = function () {
            $rootScope.targetFobPrint = $scope.targetFobPrint;
        };

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


        //view-12 funtiions
        $scope.imageSelected = function (input) {
            if (input.files) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    angular.element(document.querySelector('#img-save'))
                            .attr('src', e.target.result);
                };

                reader.readAsDataURL(input.files[0]);
            }
        };
    };

    angular.module("viewModule")
            .controller("viewController", viewController);

}());


