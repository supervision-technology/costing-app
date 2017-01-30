(function () {
    angular.module("viewModule", ["ngAnimate"]);

    var viewController = function ($http, $scope, $rootScope, systemConfig, $location, $uibModal, $uibModalStack) {
        if (!$rootScope.qty) {
            $scope.qty = 1;
        }
        if (!$rootScope.embMachineqty) {
            $scope.embMachineqty = 1;
        }
        if (!$rootScope.packingCostSolid) {
            $scope.packingCostSolid = 0.36;
        }
        if (!$rootScope.packingCostPrint) {
            $scope.packingCostPrint = 0.36;
        }

        //----------------http funtions with privilages--------------------
        //get emblishment details
        var url = systemConfig.apiUrl + "/api/emblishment/all-emblishment";

        $http.get(url)
                .success(function (data) {
                    $scope.embllishments = data;
                });

        //get tier details 
        if ($rootScope.mode === "top") {
            var url = systemConfig.apiUrl + "/api/tiers/all-tiers";

            $http.get(url)
                    .success(function (data) {
                        $scope.tiers = data;
                    });
        }

        if ($rootScope.mode === "bottom") {
            var url = systemConfig.apiUrl + "/api/tiers/all-tiers";

            $http.get(url)
                    .success(function (data) {
                        $scope.tiers = data;
                        console.log($scope.tiers);
                    });

        }

        //menu funtions
        $scope.selectTop = function () {
            $rootScope.mode = "top";
            $rootScope.top = $scope.top;
        };

        $scope.selectBottom = function () {
            $rootScope.mode = "bottom";
            $rootScope.bottom = $scope.bottom;
        };




        //----------------ui funtions-----------------------
        //get fabric cost
        $scope.getfabricCostDetails = function (styles) {
            $scope.fabricCost = styles;
            $rootScope.selectPicture = $scope.fabricCost.picture;
            $rootScope.solidPrice = $scope.fabricCost.solidPrice;
            $rootScope.solidConsumption = $scope.fabricCost.solidConsumption;
            $rootScope.printPrice = $scope.fabricCost.printPrice;
            $rootScope.printConsumption = $scope.fabricCost.printConsumption;
            $rootScope.linerPrice = $scope.fabricCost.linerPrice;
            $rootScope.linerConsumption = $scope.fabricCost.linerConsumption;

            $rootScope.fabSolid = $rootScope.solidPrice * $rootScope.solidConsumption;
            $rootScope.fabSolid = Math.round($rootScope.fabSolid * 100) / 100;

            $rootScope.fabPrint = $rootScope.printPrice * $rootScope.printConsumption;
            $rootScope.fabPrint = Math.round($rootScope.fabPrint * 100) / 100;

            $rootScope.linerCost = $rootScope.linerPrice * $rootScope.linerConsumption;
            $rootScope.linerCost = Math.round($rootScope.linerCost * 100) / 100;
        };

        //get trim cost
        $scope.getTrimCostDetails = function (styles) {
            $scope.trimCost = styles.trimCost;
            $rootScope.trimCost = $scope.trimCost;
        };

        $scope.getCupCostDetails = function (styles) {
            $scope.cupCost = styles.cupCost;
            $rootScope.cupCost = $scope.cupCost;
        };

        //get embllishment cost
        $scope.getHandEmbllishmentDetails = function (embllishment) {
            $rootScope.embCost = embllishment.price;
            $rootScope.emblishmentSmv = embllishment.smv;
            $rootScope.chargeOut = embllishment.chargeOut;
            $scope.calculateEmd();
            $scope.calculateSmvTotal();
        };

        $scope.getMachineEmbllishmentDetails = function (embllishment) {
            $rootScope.embMachineCost = embllishment.price;
            $scope.calculateMachineCost();
        };

        //get cm and smv cost 
        $scope.getCMCostDetails = function (styles) {
            $rootScope.smv = styles.smv;
            $rootScope.cor = styles.cor;

            $rootScope.cmCost = $rootScope.smv * $rootScope.cor;
            $rootScope.cmCost = Math.round($rootScope.cmCost * 100) / 100;
        };

        //view-3 funtions
        $scope.yardBtnClick = function () {
//           $scope.yardMode = 1;
        };



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

        $scope.calculateSolid = function () {
            $rootScope.fabSolid = $rootScope.solidPrice * $scope.solidConsumption;
            $rootScope.fabSolid = Math.round($rootScope.fabSolid * 100) / 100;
        };

        $scope.calculatePrint = function () {
            $rootScope.fabPrint = $rootScope.printPrice * $rootScope.printConsumption;
            $rootScope.fabPrint = Math.round($rootScope.fabPrint * 100) / 100;
        };

        //liner cost funtion
        $scope.linerPriceIncrement = function () {
            $rootScope.linerPrice += 0.01;
            $rootScope.linerPrice = Math.round($rootScope.linerPrice * 100) / 100;
            $scope.calculateLinerCost();
        };

        $scope.linerPriceDecrement = function () {
            $rootScope.linerPrice -= 0.01;
            $rootScope.linerPrice = Math.round($rootScope.linerPrice * 100) / 100;
            $scope.calculateLinerCost();
        };

        $scope.linerConsumptionIncrement = function () {
            $rootScope.linerConsumption += 0.01;
            $rootScope.linerConsumption = Math.round($rootScope.linerConsumption * 100) / 100;
            $scope.calculateLinerCost();
        };

        $scope.linerConsumptionDecrement = function () {
            $rootScope.linerConsumption -= 0.01;
            $rootScope.linerConsumption = Math.round($rootScope.linerConsumption * 100) / 100;
            $scope.calculateLinerCost();
        };

        $scope.calculateLinerCost = function () {
            $rootScope.linerCost = $rootScope.linerPrice * $scope.linerConsumption;
            $rootScope.linerCost = Math.round($rootScope.linerCost * 100) / 100;
        };

        $scope.skipLinerCost = function () {
            $rootScope.linerCost = 0;
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

        $scope.newCupCost = function () {
            if ($rootScope.mode === "top") {
                $location.path("/cup-cost");
            } else {
                $location.path("/view-6");
            }
        };

        //cup cost funtions
        $scope.cupCostIncrement = function () {
            $rootScope.cupCost += 0.01;
            $rootScope.cupCost = Math.round($rootScope.cupCost * 100) / 100;
        };

        $scope.cupCostDecrement = function () {
            $rootScope.cupCost -= 0.01;
            $rootScope.cupCost = Math.round($rootScope.cupCost * 100) / 100;
        };


        //view-6 funtions
        $scope.modalOpen = function () {
            $rootScope.embellishmentMode = "hand";
            $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'app/user/view/embellishmentPopUp.html',
                controller: 'viewController',
                size: 'lg'
            });
        };

        $scope.openMachineEmbellishment = function () {
             $rootScope.embellishmentMode = "machine";
            $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'app/user/view/embellishmentPopUp.html',
                controller: 'viewController',
                size: 'lg'
            });
        };

        //pop up dialog funtions
        $scope.close = function () {
            $uibModalStack.dismissAll();
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

        $scope.embSmvIncrement = function () {
            $rootScope.emblishmentSmv += 0.01;
            $rootScope.emblishmentSmv = Math.round($rootScope.emblishmentSmv * 100) / 100;
            $scope.calculateSmvTotal();
        };

        $scope.embSmvDecrement = function () {
            $rootScope.emblishmentSmv += 0.01;
            $rootScope.emblishmentSmv = Math.round($rootScope.emblishmentSmv * 100) / 100;
            $scope.calculateSmvTotal();
        };

        $scope.embChargeOutIncrement = function () {
            $rootScope.chargeOut += 0.01;
            $rootScope.chargeOut = Math.round($rootScope.chargeOut * 100) / 100;
            $scope.calculateSmvTotal();
        };

        $scope.embChargeOutDecrement = function () {
            $rootScope.chargeOut += 0.01;
            $rootScope.chargeOut = Math.round($rootScope.chargeOut * 100) / 100;
            $scope.calculateSmvTotal();
        };

        $scope.embMachineCostIncrement = function () {
            $rootScope.embMachineCost += 0.01;
            $rootScope.embMachineCost = Math.round($rootScope.embMachineCost * 100) / 100;
            $scope.calculateMachineCost();
        };

        $scope.embMachineCostDecrement = function () {
            $rootScope.embMachineCost += 0.01;
            $rootScope.embMachineCost = Math.round($rootScope.embMachineCost * 100) / 100;
            $scope.calculateMachineCost();
        };

        $scope.machineQtyIncrement = function () {
            $scope.embMachineqty += 1;
            $scope.embMachineqty = Math.round($scope.embMachineqty * 100) / 100;
            $rootScope.embMachineqty = $scope.embMachineqty;
            $scope.calculateMachineCost();
        };

        $scope.machineQtyDecrement = function () {
            $scope.embMachineqty -= 1;
            $scope.embMachineqty = Math.round($scope.embMachineqty * 100) / 100;
            $rootScope.embMachineqty = $scope.embMachineqty;
            $scope.calculateMachineCost();
        };

        $scope.calculateEmd = function () {
            $rootScope.emdTotal = $rootScope.embCost * $scope.qty;
            $rootScope.emdTotal = Math.round($rootScope.emdTotal * 100) / 100;
        };

        $scope.calculateSmvTotal = function () {
            $rootScope.smvChargeOutTotal = $rootScope.emblishmentSmv * $rootScope.chargeOut;
            $rootScope.smvChargeOutTotal = Math.round($rootScope.smvChargeOutTotal * 100) / 100;
        };

        $scope.calculateMachineCost = function () {
            $rootScope.machineCost = $rootScope.embMachineCost * $scope.embMachineqty;
            $rootScope.machineCost = Math.round($rootScope.machineCost * 100) / 100;
            console.log($rootScope.machineCost);
        };

        $scope.skipHandEmbllishment = function () {
            $rootScope.emdTotal = 0;
        };
        $scope.skipMachineEmbllishment = function () {
            $rootScope.machineCost = 0;
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

        $scope.backCupOrTrim = function () {
            if ($rootScope.mode === "bottom") {
                $location.path("/view-5");
            } else {
                $location.path("/cup-cost2");
            }
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
    };

    angular.module("viewModule")
            .controller("viewController", viewController);

}());