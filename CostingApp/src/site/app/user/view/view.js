(function () {
    angular.module("viewModule", ["ngAnimate", "ui.bootstrap", "angular.filter"]);

    var viewController = function ($http, $scope, $rootScope, systemConfig, $location, $uibModal, $uibModalStack) {

        $scope.styleModal = {
            styleNo: null,
            category: null,
            picture: null,
            tier: null,
            solidPrice: null,
            solidConsumption: null,
            printPrice: null,
            printConsumption: null,
            linerPrice: null,
            linerConsumption: null,
            trimCost: null,
            smv: null,
            cor: null,
            cupCost: null,
            machineEmblishment: null,
            handEmblishment: null,
            summary:
                    {
//                style: null,
                        trimCost: null,
                        fabricCostSolid: null,
                        fabricCostPrint: null,
                        linerCost: null,
                        machineEmb: null,
                        handEmb: null,
                        cmCost: null,
                        packingCost: null,
                        initialFobSolid: null,
                        initialFobPrint: null,
                        retailPriceSolid: null,
                        retailPricePrint: null,
                        seaImuSolid: 80,
                        seaImuPrint: 70,
                        airImuSolid: 50,
                        airImuPrint: 60
                    }

        };

        //--------------------http funtion------------------------

        $scope.saveStyle = function () {
            $scope.styleModal.category = $rootScope.mode;
            $scope.styleModal.solidPrice = $rootScope.solidPrice;
            $scope.styleModal.solidConsumption = $rootScope.solidConsumption;
            $scope.styleModal.printPrice = $rootScope.printPrice;
            $scope.styleModal.printConsumption = $rootScope.printConsumption;
            $scope.styleModal.linerPrice = $rootScope.linerPrice;
            $scope.styleModal.linerConsumption = $rootScope.linerConsumption;
            $scope.styleModal.trimCost = $rootScope.trimCost;
            $scope.styleModal.smv = $rootScope.smv;
            $scope.styleModal.cor = $rootScope.cor;
            $scope.styleModal.cupCost = $rootScope.cupCost;
            $scope.styleModal.machineEmblishment = $rootScope.machineEmbellishment;
            $scope.styleModal.handEmblishment = $rootScope.handEmbellishment;

            $scope.styleModal.summary.trimCost = $rootScope.trimCost;
            $scope.styleModal.summary.fabricCostSolid = $rootScope.fabSolid;
            $scope.styleModal.summary.fabricCostPrint = $rootScope.fabPrint;
            $scope.styleModal.summary.linerCost = $rootScope.linerCost;
            $scope.styleModal.summary.machineEmb = $rootScope.machineCost;
            $scope.styleModal.summary.handEmb = $rootScope.handEmbellihshmentCost;
            $scope.styleModal.summary.cmCost = $rootScope.cmCost;
            $scope.styleModal.summary.packingCost = $rootScope.packingCostSolid;
            $scope.styleModal.summary.initialFobSolid = $rootScope.calculateInitialFobSolid();
            $scope.styleModal.summary.initialFobPrint = $rootScope.calculateInitialFobPrint();
            $scope.styleModal.summary.retailPriceSolid = $rootScope.retailPriceSolid;
            $scope.styleModal.summary.retailPricePrint = $rootScope.retailPricePrint;


//            var detail = $scope.styleModal;
//            var detailJSON = JSON.stringify(detail);
//
//            console.log(detailJSON);
//
//            var url = systemConfig.apiUrl + "/api/style/save-style";
//
//            $http.post(url, detailJSON)
//                    .success(function (data, states, headers) {
//                        console.log(data);
//                    })
//                    .error(function (data, states, headers) {
//                    });

        };


        //--------------menu funtions-----------------

        $scope.selectTop = function () {
            $rootScope.mode = "top";
            $rootScope.myStyle = {
                "width": "12%"
            };
        };

        $scope.selectBottom = function () {
            $rootScope.mode = "bottom";
            $rootScope.myStyle = {
                "width": "14%"
            };
        };

        $scope.selectOnePiece = function () {
            $rootScope.mode = "one-piece";
            $rootScope.myStyle = {
                "width": "12%"
            };
        };

        //-------------------------view-3 funtions----------------------

        //get fabric cost
        $scope.getfabricCostDetails = function (styles) {
            $scope.fabricCost = styles;
            $rootScope.tier = $scope.fabricCost.tier.name;
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

        $scope.changeYardToMeter = function (value) {
            if (value === true) {
                $rootScope.checkboxModel = true;
                $rootScope.solidPrice = $rootScope.solidPrice * 1.094;
                $rootScope.solidConsumption = $rootScope.solidConsumption / 1.094;
                $rootScope.printPrice = $rootScope.printPrice * 1.094;
                $rootScope.printConsumption = $rootScope.printConsumption / 1.094;
                $scope.calculateYardToMeter();
                $scope.calculatePrint();
                $scope.calculateSolid();
            } else {
                $rootScope.checkboxModel = false;
                $rootScope.solidPrice = $rootScope.solidPrice / 1.094;
                $rootScope.solidConsumption = $rootScope.solidConsumption * 1.094;
                $rootScope.printPrice = $rootScope.printPrice / 1.094;
                $rootScope.printConsumption = $rootScope.printConsumption * 1.094;
                $scope.calculateYardToMeter();
                $scope.calculatePrint();
                $scope.calculateSolid();
            }
        };

        $scope.calculateYardToMeter = function () {
            $rootScope.solidPrice = Math.round($rootScope.solidPrice * 100) / 100;
            $rootScope.solidConsumption = Math.round($rootScope.solidConsumption * 100) / 100;
            $rootScope.printPrice = Math.round($rootScope.printPrice * 100) / 100;
            $rootScope.printConsumption = Math.round($rootScope.printConsumption * 100) / 100;
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

        //-------------------liner cost funtion----------------------

        $scope.changeYardToMeter2 = function (value) {
            if (value === true) {
                $rootScope.checkboxModel2 = true;
                $rootScope.linerPrice = $rootScope.linerPrice * 1.094;
                $rootScope.linerConsumption = $rootScope.linerConsumption / 1.094;
                $scope.calculateYardToMeter2();
                $scope.calculateLinerCost();
            } else {
                $rootScope.checkboxModel2 = false;
                $rootScope.linerPrice = $rootScope.linerPrice / 1.094;
                $rootScope.linerConsumption = $rootScope.linerConsumption * 1.094;
                $scope.calculateYardToMeter2();
                $scope.calculateLinerCost();
            }
        };

        $scope.calculateYardToMeter2 = function () {
            $rootScope.linerPrice = Math.round($rootScope.linerPrice * 100) / 100;
            $rootScope.linerConsumption = Math.round($rootScope.linerConsumption * 100) / 100;
        };

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

        //-----------------view-5 funtions----------------------

        //get trim cost
        $scope.getTrimCostDetails = function (styles) {
            $scope.trimCost = styles.trimCost;
            $rootScope.trimCost = $scope.trimCost;
            $rootScope.tier = styles.tier.name;
            $rootScope.selectPicture = styles.picture;
        };

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

        //------------------cup cost funtions-----------------

        //get cup cost details
        $scope.getCupCostDetails = function (styles) {
            $scope.cupCost = styles.cupCost;
            $rootScope.cupCost = $scope.cupCost;
            $rootScope.tier = styles.tier.name;
            $rootScope.selectPicture = styles.picture;
        };

        $scope.cupCostIncrement = function () {
            $rootScope.cupCost += 0.01;
            $rootScope.cupCost = Math.round($rootScope.cupCost * 100) / 100;
        };

        $scope.cupCostDecrement = function () {
            $rootScope.cupCost -= 0.01;
            $rootScope.cupCost = Math.round($rootScope.cupCost * 100) / 100;
        };


        //------------------view-6 funtions-----------------
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

        //--------------------hand embellishment-----------------

        //select hand embllishment cost
        $scope.getHandEmbllishmentDetails = function (embllishment) {
            $rootScope.handEmbellishment = embllishment.indexNo;
            $rootScope.embCost = embllishment.price;
            $rootScope.emblishmentSmv = embllishment.smv;
            $rootScope.chargeOut = embllishment.chargeOut;
            $scope.calculateEmd();
            $scope.calculateSmvTotal();
            $scope.handEmbellishmentCost();
        };

        $scope.embCostIncrement = function () {
            $rootScope.embCost += 0.01;
            $rootScope.embCost = Math.round($rootScope.embCost * 100) / 100;
            $scope.calculateEmd();
            $scope.handEmbellishmentCost();
        };

        $scope.embCostDecrement = function () {
            $rootScope.embCost -= 0.01;
            $rootScope.embCost = Math.round($rootScope.embCost * 100) / 100;
            $scope.calculateEmd();
            $scope.handEmbellishmentCost();
        };

        $scope.qtyIncrement = function () {
            $rootScope.qty += 1;
            $rootScope.qty = Math.round($scope.qty * 100) / 100;
            $scope.calculateEmd();
        };

        $scope.qtyDecrement = function () {
            $rootScope.qty -= 1;
            $rootScope.qty = Math.round($scope.qty * 100) / 100;
            $scope.calculateEmd();
            $scope.handEmbellishmentCost();
        };

        $scope.embSmvIncrement = function () {
            $rootScope.emblishmentSmv += 0.01;
            $rootScope.emblishmentSmv = Math.round($rootScope.emblishmentSmv * 100) / 100;
            $scope.calculateSmvTotal();
            $scope.handEmbellishmentCost();
        };

        $scope.embSmvDecrement = function () {
            $rootScope.emblishmentSmv += 0.01;
            $rootScope.emblishmentSmv = Math.round($rootScope.emblishmentSmv * 100) / 100;
            $scope.calculateSmvTotal();
            $scope.handEmbellishmentCost();
        };

        $scope.embChargeOutIncrement = function () {
            $rootScope.chargeOut += 0.01;
            $rootScope.chargeOut = Math.round($rootScope.chargeOut * 100) / 100;
            $scope.calculateSmvTotal();
            $scope.handEmbellishmentCost();
        };

        $scope.embChargeOutDecrement = function () {
            $rootScope.chargeOut += 0.01;
            $rootScope.chargeOut = Math.round($rootScope.chargeOut * 100) / 100;
            $scope.calculateSmvTotal();
            $scope.handEmbellishmentCost();
        };

        $scope.calculateSmvTotal = function () {
            $rootScope.smvChargeOutTotal = $rootScope.emblishmentSmv * $rootScope.chargeOut;
            $rootScope.smvChargeOutTotal = Math.round($rootScope.smvChargeOutTotal * 100) / 100;
        };

        $scope.calculateEmd = function () {
            $rootScope.emdTotal = $rootScope.embCost * $rootScope.qty;
            $rootScope.emdTotal = Math.round($rootScope.emdTotal * 100) / 100;
        };

        $scope.handEmbellishmentCost = function () {
            $rootScope.handEmbellihshmentCost = $rootScope.emdTotal + $rootScope.smvChargeOutTotal;
            $rootScope.handEmbellihshmentCost = Math.round($rootScope.handEmbellihshmentCost * 100) / 100;
        };

        $scope.skipHandEmbllishment = function () {
            $rootScope.handEmbellihshmentCost = 0;
        };


        //-------------- machine embellishment---------------------

        //select machine embllishment cost
        $scope.getMachineEmbllishmentDetails = function (embllishment) {
            $rootScope.machineEmbellishment = embllishment.indexNo;
            $rootScope.embMachineCost = embllishment.price;
            $scope.calculateMachineCost();
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


        $scope.calculateMachineCost = function () {
            $rootScope.machineCost = $rootScope.embMachineCost * $scope.embMachineqty;
            $rootScope.machineCost = Math.round($rootScope.machineCost * 100) / 100;
        };

        $scope.skipMachineEmbllishment = function () {
            $rootScope.machineCost = 0;
        };

        //--------------------view-8 funtions--------------------

        //get cm and smv cost 
        $scope.getCMCostDetails = function (styles) {
            $rootScope.tier = styles.tier.name;
            $rootScope.selectPicture = styles.picture;
            $rootScope.smv = styles.smv;
            $rootScope.cor = styles.cor;

            $rootScope.cmCost = $rootScope.smv * $rootScope.cor;
            $rootScope.cmCost = Math.round($rootScope.cmCost * 100) / 100;
        };


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

        $scope.calculateCm = function () {
            $rootScope.cmCost = $rootScope.smv * $rootScope.cor;
            $rootScope.cmCost = Math.round($rootScope.cmCost * 100) / 100;
        };


        //view-9 funtions
        $rootScope.calculateInitialFobSolid = function () {
            var fob =
                    parseFloat($scope.fabSolid)
                    + parseFloat($scope.trimCost)
                    + parseFloat($scope.linerCost)
                    + parseFloat($scope.handEmbellihshmentCost)
                    + parseFloat($scope.machineCost)
                    + parseFloat($scope.cupCost)
                    + parseFloat($scope.cmCost)
                    + parseFloat($scope.packingCostSolid);
            fob = Math.round(fob * 100) / 100;
            $scope.changePackingCostSolid();
            $scope.changeFabCostSolid();
            $scope.changeTrimCost();
            $scope.changeEmdTotal();
            $scope.changCmCost();
            $scope.changeMachineEmbTotal();
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

        //TODO
        $scope.changeEmdTotal = function () {
//            $rootScope.emdTotal = $scope.emdTotal;
//            $rootScope.embCost = $rootScope.emdTotal / $rootScope.qty;
//            $rootScope.embCost = Math.round($rootScope.embCost * 100) / 100;
        };

        $scope.changeMachineEmbTotal = function () {
            $rootScope.machineCost = $scope.machineCost;
            $rootScope.embMachineCost = $rootScope.machineCost / $rootScope.embMachineqty;
            $rootScope.embMachineCost = Math.round($rootScope.embMachineCost * 100) / 100;
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
                    + parseFloat($scope.linerCost)
                    + parseFloat($scope.handEmbellihshmentCost)
                    + parseFloat($scope.machineCost)
                    + parseFloat($scope.cupCost)
                    + parseFloat($scope.cmCost)
                    + parseFloat($scope.packingCostPrint);
            fob = Math.round(fob * 100) / 100;
            $scope.changePackingCostPrint();
            $scope.changeFabCostSolid();
            $scope.changeTrimCost();
            $scope.changeEmdTotal();
            $scope.changCmCost();
            $scope.changeMachineEmbTotal();
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

        // form 12 funtion

//        $scope.changeTiers = function (tier) {
//            console.log(tier);
//            $scope.styleModal.tier = tier;
//        };

        // upload file
        $scope.imageUpload = function (event) {
            //FileList object
            var files = event.target.files;

            for (var i = 0; i < files.length; i++) {
                var file = files[i];
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

        $scope.uploadForm = function (index) {
            var file = document.getElementById("file").files[0];
            var url = systemConfig.apiUrl + "/document/upload-image/" + index;


            var formData = new FormData();
            formData.append("file", file);
//
            var xhr = new XMLHttpRequest();
            xhr.open("POST", url);
            xhr.send(formData);
        };


        $scope.inint = function () {

            //----------------------get Styles----------------------

            //get bottem styles
            if (!$rootScope.bottomList) {
                $rootScope.bottomList = new Array();
                var url = systemConfig.apiUrl + "/api/style/all-style/" + "bottom";
                $http.get(url)
                        .success(function (data) {
                            console.log(data);
                            $rootScope.bottomList.push(data);
                        });
            } else if ($rootScope.mode === 'bottom') {
                angular.forEach($rootScope.bottomList, function (value) {
                    $scope.styleList = value;
                });
            }

            //get top styles
            if (!$rootScope.TopList) {
                $rootScope.TopList = new Array();
                var url = systemConfig.apiUrl + "/api/style/all-style/" + "top";
                $http.get(url)
                        .success(function (data) {
                            $rootScope.TopList.push(data);
                        });
            } else if ($rootScope.mode === 'top') {
                angular.forEach($rootScope.TopList, function (value) {
                    $scope.styleList = value;
                });
            }

            //get one-piece styles
            if (!$rootScope.onePieceList) {
                $rootScope.onePieceList = new Array();
                var url = systemConfig.apiUrl + "/api/style/all-style/" + "one-piece";
                $http.get(url)
                        .success(function (data) {
                            $rootScope.onePieceList.push(data);
                        });
            } else if ($rootScope.mode === 'one-piece') {
                angular.forEach($rootScope.onePieceList, function (value) {
                    $scope.styleList = value;
                });
            }

            //get emblishments
            if (!$rootScope.embList) {
                $rootScope.embList = new Array();
                var url = systemConfig.apiUrl + "/api/embellishment";
                $http.get(url)
                        .success(function (data) {
                            $rootScope.embList.push(data);
                        });
            } else {
                angular.forEach($rootScope.embList, function (value) {
                    $scope.embllishments = value;
                });
            }

            //get tiers
            if (!$rootScope.tierList) {
                $rootScope.tierList = new Array();
                var url = systemConfig.apiUrl + "/api/tiers";
                $http.get(url)
                        .success(function (data) {
                            $rootScope.tierList.push(data);
                        });
            } else {
                angular.forEach($rootScope.tierList, function (value) {
                    $scope.tiers = value;
                });
            }

            if (!$rootScope.qty) {
                $rootScope.qty = 1;
            }
            if (!$rootScope.embMachineqty) {
                $rootScope.embMachineqty = 1;
            }
            if (!$rootScope.packingCostSolid) {
                $scope.packingCostSolid = 0.36;
            }
            if (!$rootScope.packingCostPrint) {
                $scope.packingCostPrint = 0.36;
            }
            if (!$rootScope.cupCost) {
                $rootScope.cupCost = 0;
            }

            if (!$rootScope.checkboxModel === true) {
                $rootScope.checkboxModel = false;
            } else {
                $rootScope.checkboxModel = true;
            }

            if (!$rootScope.checkboxModel2 === true) {
                $rootScope.checkboxModel2 = false;
            } else {
                $rootScope.checkboxModel2 = true;
            }
        };

        $scope.inint();
    };

    angular.module("viewModule")
            .controller("viewController", viewController);
}());