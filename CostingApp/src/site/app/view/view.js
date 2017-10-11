(function () {
    angular.module("viewModule", ["ngAnimate", "ui.bootstrap", "angular.filter"]);

    var viewController = function ($http, $scope, $rootScope,FileSaver, systemConfig, $location, $uibModal, $uibModalStack, Notification) {


        $scope.styleModal = {
            styleNo: null,
            category: null,
            picture: null,
            tier: {},
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
            machineEmbellishment: null,
            handEmbellishment: null,
            handEmbellishmentCost: null,
            machineEmbellishmentCost: null,
            measure: null,
            date: null,
            summary:
                    {
                        trimCostSolid: null,
                        trimCostPrint: null,
                        fabricCostSolid: null,
                        fabricCostPrint: null,
                        linerCostSolid: null,
                        linerCostPrint: null,
                        machineEmbSolid: null,
                        machineEmbPrint: null,
                        handEmbSolid: null,
                        handEmbPrint: null,
                        cmCostSolid: null,
                        cmCostPrint: null,
                        packingCostSolid: null,
                        packingCostPrint: null,
                        initialFobSolid: null,
                        initialFobPrint: null,
                        retailPriceSolid: null,
                        retailPricePrint: null,
                        seaImuSolid: 0,
                        seaImuPrint: 0,
                        airImuSolid: 0,
                        airImuPrint: 0
                    }

        };

        $scope.resetModel = function () {
            $scope.styleModal = {
                styleNo: null,
                category: null,
                picture: null,
                tier: {},
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
                machineEmbellishment: null,
                handEmbellishment: null,
                handEmbellishmentCost: null,
                machineEmbellishmentCost: null,
                measure: null,
                date: null,
                summary:
                        {
                            trimCostSolid: null,
                            trimCostPrint: null,
                            fabricCostSolid: null,
                            fabricCostPrint: null,
                            linerCostSolid: null,
                            linerCostPrint: null,
                            machineEmbSolid: null,
                            machineEmbPrint: null,
                            handEmbSolid: null,
                            handEmbPrint: null,
                            cmCostSolid: null,
                            cmCostPrint: null,
                            packingCostSolid: null,
                            packingCostPrint: null,
                            initialFobSolid: null,
                            initialFobPrint: null,
                            retailPriceSolid: null,
                            retailPricePrint: null,
                            seaImuSolid: 0,
                            seaImuPrint: 0,
                            airImuSolid: 0,
                            airImuPrint: 0
                        }

            };
        };


        //--------------------http funtion------------------------

        $scope.saveStyle = function () {
            if ($scope.styleModal.date && $scope.styleModal.tier && document.getElementById('file-upload').files[0]) {
                $scope.styleModal.machineEmbellishment = $rootScope.machineEmbellishmentIndexNo;
                $scope.styleModal.handEmbellishment = $rootScope.handEmbellishmentIndexNo;
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
                $scope.styleModal.handEmbellishmentCost = $rootScope.handEmbellihshmentCost;
                $scope.styleModal.machineEmbellishmentCost = $rootScope.machineCost;
                $scope.styleModal.measure = $rootScope.styleMeasure;


                $scope.styleModal.summary.trimCostSolid = $rootScope.trimCost;
                $scope.styleModal.summary.trimCostPrint = $rootScope.trimPrint;
                $scope.styleModal.summary.fabricCostSolid = $rootScope.fabSolid;
                $scope.styleModal.summary.fabricCostPrint = $rootScope.fabPrint;
                $scope.styleModal.summary.linerCostSolid = $rootScope.linerCost;
                $scope.styleModal.summary.linerCostPrint = $rootScope.linerPrint;
                $scope.styleModal.summary.machineEmbSolid = $rootScope.machineCost;
                $scope.styleModal.summary.machineEmbPrint = $rootScope.machinePrint;
                $scope.styleModal.summary.handEmbSolid = $rootScope.handEmbellihshmentCost;
                $scope.styleModal.summary.handEmbPrint = $rootScope.handEmbellihshmentPrint;
                $scope.styleModal.summary.cmCostSolid = $rootScope.cmCost;
                $scope.styleModal.summary.cmCostPrint = $rootScope.cmCost;
//            $scope.styleModal.summary.cmCostPrint = $rootScope.cmPrint;
                $scope.styleModal.summary.packingCostSolid = $rootScope.packingCostSolid;
                $scope.styleModal.summary.packingCostPrint = $rootScope.packingCostPrint;
                $scope.styleModal.summary.initialFobSolid = $rootScope.calculateInitialFobSolid();
                $scope.styleModal.summary.initialFobPrint = $rootScope.calculateInitialFobPrint();
                $scope.styleModal.summary.retailPriceSolid = $rootScope.retailPriceSolid;
                $scope.styleModal.summary.retailPricePrint = $rootScope.retailPricePrint;
                $scope.styleModal.summary.seaImuSolid = $rootScope.seaImuSolid;
                $scope.styleModal.summary.seaImuPrint = $rootScope.seaImuPrint;
                $scope.styleModal.summary.airImuSolid = $rootScope.airImuSolid;
                $scope.styleModal.summary.airImuPrint = $rootScope.airImuPrint;


//            console.log($scope.styleModal);

                var url = systemConfig.apiUrl + "/api/style/save-style";

                var formData = new FormData();
                var file = document.getElementById('file-upload').files[0];
                var json = $scope.styleModal;

                formData.append("file", file);
                formData.append("ad", JSON.stringify(json));

                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function () {
                    if (this.readyState === 4 && this.status === 200) {
                        $scope.resetModel();
                        Notification.success("Style Save Successfully");
                    }
                };
                xhr.open("POST", url);
                xhr.send(formData);
            } else {
                Notification.error("Please Input Details");
            }


        };


      


        //-------------------------view-2 funtions----------------------
        $scope.selectZoom = function (style) {
            $rootScope.style = style;
            $scope.styleNo = style.styleNo;
            $scope.selectStyle = $scope.getImage(style.picture);

        };

        //----------------------img zoom model funtions----------------

        $scope.selectFabricStyle = function () {
            if ($rootScope.style.measure === "M") {
                $rootScope.checkboxModel = true;
            }
            $scope.getfabricCostDetails($rootScope.style);
        };

        $scope.selectLinerStyle = function () {
              if ($rootScope.style.measure === "M") {
                $rootScope.checkboxModel2 = true;
            }
            $scope.getLinerCostDetails($rootScope.style);
        };

        $scope.selectTrimStyle = function () {
            $scope.getTrimCostDetails($rootScope.style);
        };

        $scope.selectHandEmbTopStyle = function () {
            $scope.selectHandEmb($rootScope.style);
        };

        $scope.selectHandEmbBottomStyle = function () {
            $scope.selectHandEmb($rootScope.style);
        };

        $scope.selectHandEmbOnePieceStyle = function () {
            $scope.selectHandEmb($rootScope.style);
        };

        $scope.selectMachineEmbBottomStyle = function () {
            $scope.selectMachineEmb($rootScope.style);
        };

        $scope.selectMachineEmbOnePieceStyle = function () {
            $scope.selectMachineEmb($rootScope.style);
        };

        $scope.selectMachineEmbTopStyle = function () {
            $scope.selectMachineEmb($rootScope.style);
        };
        $scope.selectCupStyle = function () {
            $scope.getCupCostDetails($rootScope.style);
        };
        $scope.selectCMCostStyle = function () {
            $scope.getCMCostDetails($rootScope.style);
        };

        //-------------------------view-3 funtions----------------------

        //get fabric cost
        $scope.getfabricCostDetails = function (styles) {
            $scope.fabricCost = styles;
            $rootScope.tier = $scope.fabricCost.tier.name;
            $rootScope.selectPicture = $scope.getImage($scope.fabricCost.picture);
            $rootScope.styleNo = $scope.fabricCost.styleNo;
            $rootScope.solidPrice = $scope.fabricCost.solidPrice;
            $rootScope.solidConsumption = $scope.fabricCost.solidConsumption;
            $rootScope.printPrice = $scope.fabricCost.printPrice;
            $rootScope.printConsumption = $scope.fabricCost.printConsumption;


            $rootScope.fabSolid = $rootScope.solidPrice * $rootScope.solidConsumption;
            $rootScope.fabSolid = Math.round($rootScope.fabSolid * 100) / 100;

            $rootScope.fabPrint = $rootScope.printPrice * $rootScope.printConsumption;
            $rootScope.fabPrint = Math.round($rootScope.fabPrint * 100) / 100;
        };

        $scope.getLinerCostDetails = function (styles) {
            $scope.linerCost1 = styles;
            $rootScope.selectPicture1 = $scope.getImage($scope.linerCost1.picture);
            $rootScope.tier1 = $scope.linerCost1.tier.name;
            $rootScope.styleNo1 = $scope.linerCost1.styleNo;
            $rootScope.linerPrice = $scope.linerCost1.linerPrice;
            $rootScope.linerConsumption = $scope.linerCost1.linerConsumption;

            $rootScope.linerCost = $rootScope.linerPrice * $rootScope.linerConsumption;
            $rootScope.linerCost = Math.round($rootScope.linerCost * 100) / 100;

            $rootScope.linerPrint = $rootScope.linerCost;
        };

        $scope.changeYardToMeter = function (value) {
            //meter
            if (value === true) {
                $rootScope.styleMeasure = "M";
                $rootScope.checkboxModel2 = true;
                $rootScope.checkboxModel = true;
                $rootScope.solidPrice = $rootScope.solidPrice * 1.094;
                $rootScope.solidConsumption = $rootScope.solidConsumption / 1.094;
                $rootScope.printPrice = $rootScope.printPrice * 1.094;
                $rootScope.printConsumption = $rootScope.printConsumption / 1.094;
                $scope.calculateYardToMeter();
                $scope.calculatePrint();
                $scope.calculateSolid();
                //yeard
            } else {
                $rootScope.styleMeasure = "Y";
                $rootScope.checkboxModel2 = true;
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
                $rootScope.styleMeasure = "M";
                $rootScope.checkboxModel2 = true;
                $rootScope.linerPrice = $rootScope.linerPrice * 1.094;
                $rootScope.linerConsumption = $rootScope.linerConsumption / 1.094;
                $scope.calculateYardToMeter2();
                $scope.calculateLinerCost();
            } else {
                $rootScope.styleMeasure = "Y";
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

            $rootScope.linerPrint = $rootScope.linerCost;
        };

        $scope.skipLinerCost = function () {
            $rootScope.linerCost = 0;
            $rootScope.linerPrint = 0;
            $rootScope.linerPrice = 0;
            $rootScope.selectPicture1 = "";
            $rootScope.tier1 = "";
            $rootScope.styleNo1 = "";
            $rootScope.linerConsumption = 0;
        };

        //-----------------view-5 funtions----------------------

        //get trim cost
        $scope.getTrimCostDetails = function (styles) {
            $scope.trimCost = styles.trimCost;
            $rootScope.trimCost = $scope.trimCost;
            $rootScope.trimPrint = $rootScope.trimCost;
            $rootScope.tier2 = styles.tier.name;
            $rootScope.selectPicture2 = $scope.getImage(styles.picture);
            $rootScope.styleNo2 = styles.styleNo;
        };

        $scope.trimCostIncrement = function () {
            $scope.trimCost += 0.01;
            $scope.trimCost = Math.round($scope.trimCost * 100) / 100;
            $rootScope.trimCost = $scope.trimCost;
            $rootScope.trimPrint = $rootScope.trimCost;
        };

        $scope.trimCostDecrement = function () {
            $scope.trimCost -= 0.01;
            $scope.trimCost = Math.round($scope.trimCost * 100) / 100;
            $rootScope.trimCost = $scope.trimCost;
            $rootScope.trimPrint = $rootScope.trimCost;
        };

        $scope.newCupCost = function () {
            if ($rootScope.mode === "Top") {
                $location.path("/cup-cost");
            } else {
                $location.path("/hand-embellishment");
            }
        };

        //------------------cup cost funtions-----------------

        $scope.skipCupCost = function () {
            $scope.cupCost = 0;
        };

        //get cup cost details
        $scope.getCupCostDetails = function (styles) {
            $rootScope.cupCost = styles.cupCost;
            $rootScope.tier = styles.tier.name;
            $rootScope.styleNo = styles.styleNo;
            $rootScope.selectPicture = $scope.getImage(styles.picture);
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
                templateUrl: 'app/view/embellishmentPopUp.html',
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
                templateUrl: 'app/view/embellishmentPopUp.html',
                controller: 'viewController',
                size: 'lg'
            });
        };

        //pop up dialog funtions
        $scope.close = function () {
            $uibModalStack.dismissAll();
        };

        //--------------------hand embellishment funtion-----------------

        $scope.nextMachineEmb = function () {
            if (!$rootScope.handEmbellishmentIndexNo) {
                Notification.error("select a embllishment or click skip button");
            } else {
                $location.path("/machine-embllishments");
            }

        };

        $scope.backCupCostOrhandEmb = function () {
            if ($rootScope.mode === "Bottom") {
                $location.path("/view-5");
            } else {
                $location.path("/cup-cost2");
            }
        };

        //select hand embllishment cost
        $scope.getHandEmbllishmentDetails = function (embllishment) {
            $rootScope.handEmbellishmentIndexNo = embllishment.indexNo;
            $rootScope.embCost = embllishment.price;
            $rootScope.handEmbellihshmentPrint = $rootScope.embCost;
            $rootScope.emblishmentSmv = embllishment.smv;
            $rootScope.chargeOut = embllishment.chargeOut;
            $rootScope.tier5 = embllishment.tier;

            $rootScope.selectPicture5 = $scope.getImage(embllishment.picture);
            $scope.calculateEmd();
            $scope.calculateSmvTotal();
            $scope.handEmbellishmentIndexNoCost();
            $scope.close();
        };

        $scope.selectHandEmb = function (embllishment) {
            $rootScope.handEmbellishmentIndexNo = embllishment.indexNo;
            $rootScope.emblishmentSmv = embllishment.smv;
            $rootScope.embCost = embllishment.price;
            $rootScope.handEmbellihshmentPrint = $rootScope.embCost;
            $rootScope.chargeOut = embllishment.chargeOut;
            $rootScope.tier5 = embllishment.tier;
            $rootScope.selectPicture5 = $scope.getImage(embllishment.picture);
            $scope.calculateEmd();
            $scope.calculateSmvTotal();
            $scope.handEmbellishmentIndexNoCost();
        };

        $scope.embCostIncrement = function () {
            $rootScope.embCost += 0.01;
            $rootScope.embCost = Math.round($rootScope.embCost * 100) / 100;
            $scope.calculateEmd();
            $scope.handEmbellishmentIndexNoCost();
        };

        $scope.embCostDecrement = function () {
            $rootScope.embCost -= 0.01;
            $rootScope.embCost = Math.round($rootScope.embCost * 100) / 100;
            $scope.calculateEmd();
            $scope.handEmbellishmentIndexNoCost();
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
            $scope.handEmbellishmentIndexNoCost();
        };

        $scope.embSmvIncrement = function () {
            $rootScope.emblishmentSmv += 0.01;
            $rootScope.emblishmentSmv = Math.round($rootScope.emblishmentSmv * 100) / 100;
            $scope.calculateSmvTotal();
            $scope.handEmbellishmentIndexNoCost();
        };

        $scope.embSmvDecrement = function () {
            $rootScope.emblishmentSmv += 0.01;
            $rootScope.emblishmentSmv = Math.round($rootScope.emblishmentSmv * 100) / 100;
            $scope.calculateSmvTotal();
            $scope.handEmbellishmentIndexNoCost();
        };

        $scope.embChargeOutIncrement = function () {
            $rootScope.chargeOut += 0.01;
            $rootScope.chargeOut = Math.round($rootScope.chargeOut * 100) / 100;
            $scope.calculateSmvTotal();
            $scope.handEmbellishmentIndexNoCost();
        };

        $scope.embChargeOutDecrement = function () {
            $rootScope.chargeOut += 0.01;
            $rootScope.chargeOut = Math.round($rootScope.chargeOut * 100) / 100;
            $scope.calculateSmvTotal();
            $scope.handEmbellishmentIndexNoCost();
        };

        $scope.calculateSmvTotal = function () {
            $rootScope.smvChargeOutTotal = $rootScope.emblishmentSmv * $rootScope.chargeOut;
            $rootScope.smvChargeOutTotal = Math.round($rootScope.smvChargeOutTotal * 100) / 100;
        };

        $scope.calculateEmd = function () {
            $rootScope.emdTotal = $rootScope.embCost * $rootScope.qty;
            $rootScope.emdTotal = Math.round($rootScope.emdTotal * 100) / 100;
        };

        $scope.handEmbellishmentIndexNoCost = function () {
            $rootScope.handEmbellihshmentCost = $rootScope.emdTotal + $rootScope.smvChargeOutTotal;
            $rootScope.handEmbellihshmentCost = Math.round($rootScope.handEmbellihshmentCost * 100) / 100;

            $rootScope.handEmbellihshmentPrint = $rootScope.handEmbellihshmentCost;
        };

        $scope.skipHandEmbllishment = function () {
            $rootScope.handEmbellishmentIndexNo = null;
            $rootScope.handEmbellihshmentCost = 0;
            $rootScope.handEmbellihshmentPrint = 0;
            $rootScope.emdTotal = "";
            $rootScope.smvChargeOutTotal = "";
            $rootScope.embCost = "";
            $rootScope.qty = "";
            $rootScope.emblishmentSmv = "";
            $rootScope.chargeOut = "";
            $rootScope.selectPicture5 = "";
            $rootScope.tier5 = "";
            $rootScope.embCost = "";
            $scope.calculateEmd();
        };

        //-------------- machine embellishment---------------------

        $scope.nextCmCost = function () {
            if (!$rootScope.machineEmbellishmentIndexNo) {
                Notification.error("select a embllishment or click skip button");
            } else {
                $location.path("/view-7");
            }
        };

        //select machine embllishment cost
        $scope.getMachineEmbllishmentDetails = function (embllishment) {
            $rootScope.machineEmbellishmentIndexNo = embllishment.indexNo;
            $rootScope.selectPicture4 = $scope.getImage(embllishment.picture);
            $rootScope.tier4 = embllishment.tier;
            $rootScope.embMachineCost = embllishment.price;
            $rootScope.machinePrint = $rootScope.embMachineCost;
            $scope.calculateMachineCost();
            $scope.close();
        };

        $scope.selectMachineEmb = function (embllishment) {
            $rootScope.machineEmbellishmentIndexNo = embllishment.indexNo;
            $rootScope.embMachineCost = embllishment.price;
            $rootScope.machinePrint = $rootScope.embMachineCost;
            $rootScope.tier4 = embllishment.tier;
            $rootScope.selectPicture4 = $scope.getImage(embllishment.picture);
            $scope.calculateMachineCost();
        };

        $scope.embMachineCostIncrement = function () {
            $rootScope.embMachineCost += 0.01;
            $rootScope.embMachineCost = Math.round($rootScope.embMachineCost * 100) / 100;
            $scope.calculateMachineCost();
        };

        $scope.embMachineCostDecrement = function () {
            $rootScope.embMachineCost -= 0.01;
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

            $rootScope.machinePrint = $rootScope.machineCost;
        };

        $scope.skipMachineEmbllishment = function () {
            $rootScope.machineEmbellishmentIndexNo = null;
            $rootScope.machineCost = 0;
            $rootScope.machinePrint = 0;
            $rootScope.embMachineCost = "";
            $scope.embMachineqty = "";
            $rootScope.tier4 = "";
            $rootScope.selectPicture4 = "";
        };



        //--------------------view-8 funtions--------------------

        //get cm and smv cost 
        $scope.getCMCostDetails = function (styles) {
            $rootScope.tier3 = styles.tier.name;
            $rootScope.selectPicture3 = $scope.getImage(styles.picture);
            $rootScope.styleNo3 = styles.styleNo;
            $rootScope.smv = styles.smv;
            $rootScope.cor = styles.cor;

            $rootScope.cmCost = $rootScope.smv * $rootScope.cor;
            $rootScope.cmCost = Math.round($rootScope.cmCost * 100) / 100;

            $rootScope.cmPrint = $rootScope.cmCost;
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

        $scope.calculateCm = function () {
            $rootScope.cmCost = $rootScope.smv * $rootScope.cor;
            $rootScope.cmCost = Math.round($rootScope.cmCost * 100) / 100;

            $rootScope.cmPrint = $rootScope.cmCost;
        };


        //-----------------view-9 funtions------------

        $scope.nextSolidSummary = function () {
            if (!$rootScope.retailPriceSolid) {
                Notification.error("please enter retail price");
            } else {
                $location.path("/view-10");
            }

        };

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

            $rootScope.solidInitialFob = fob;
            $scope.changePackingCostSolid();
            $scope.changeFabCostSolid();
            $scope.changeLinerCost();
            $scope.changeTrimCost();
            $scope.changeMachineEmbCost();
            $scope.changeHandEmbCost();
            $scope.changCmCost();
            $scope.changeCupCost();


            $scope.changeEmdTotal();
            $scope.changeMachineEmbTotal();

            return fob;
        };

        $rootScope.calcAirCostSolid = function () {
            //TODO
            var data = null;
            if ($rootScope.calculateInitialFobSolid()) {
                if ($rootScope.mode === "Bottom") {
                    data = (($rootScope.solidInitialFob * (24.90 / 100)) + $rootScope.solidInitialFob + 0.002 + 0.267) * (110.62 / 100);
                    data = Math.round(data * 100) / 100;
                    return data;
                } else if ($rootScope.mode === "Top") {
                    data = (($rootScope.solidInitialFob * (24.90 / 100)) + $rootScope.solidInitialFob + 0.002 + 0.556) * (110.62 / 100);
                    data = Math.round(data * 100) / 100;
                    return data;
                } else {
                    data = (($rootScope.solidInitialFob * (24.90 / 100)) + $rootScope.solidInitialFob + 0.002 + 0.671) * (110.62 / 100);
                    data = Math.round(data * 100) / 100;
                    return data;
                }
            } else {
                return "0";
            }
        };

        $rootScope.calcSeaCostSolid = function () {
            var data = null;
            if ($rootScope.calculateInitialFobSolid()) {
                if ($rootScope.mode === "Bottom") {
                    data = (($rootScope.solidInitialFob * (24.90 / 100)) + $rootScope.solidInitialFob + 0.002 + 0.052) * (110.62 / 100);
                    data = Math.round(data * 100) / 100;
                    return data;
                } else if ($rootScope.mode === "Top") {
                    data = (($rootScope.solidInitialFob * (24.90 / 100)) + $rootScope.solidInitialFob + 0.002 + 0.109) * (110.62 / 100);
                    data = Math.round(data * 100) / 100;
                    return data;
                } else {
                    data = (($rootScope.solidInitialFob * (24.90 / 100)) + $rootScope.solidInitialFob + 0.002 + 0.134) * (110.62 / 100);
                    data = Math.round(data * 100) / 100;
                    return data;
                }
            } else {
                return "0";
            }
        };

        $scope.changePackingCostSolid = function () {
            $rootScope.packingCostSolid = $scope.packingCostSolid;
        };

        $scope.changeFabCostSolid = function () {
            $rootScope.fabSolid = $scope.fabSolid;
        };

        $scope.changeLinerCost = function () {
            $rootScope.linerCost = $scope.linerCost;
        };

        $scope.changeTrimCost = function () {
            $rootScope.trimCost = $scope.trimCost;
        };

        $scope.changeMachineEmbCost = function () {
            $rootScope.machineCost = $scope.machineCost;
        };

        $scope.changeHandEmbCost = function () {
            $rootScope.handEmbellihshmentCost = $scope.handEmbellihshmentCost;
        };

        $scope.changeCupCost = function () {
            $rootScope.cupCost = $scope.cupCost;
        };

        //TODO
        $scope.changeEmdTotal = function () {
//          $rootScope.emdTotal = $scope.emdTotal;
//          $rootScope.embCost = $rootScope.emdTotal / $rootScope.qty;
//          $rootScope.embCost = Math.round($rootScope.embCost * 100) / 100;
        };

        $scope.changeMachineEmbTotal = function () {
            $rootScope.machineCost = $scope.machineCost;
            $rootScope.embMachineCost = $rootScope.machineCost / $rootScope.embMachineqty;
            $rootScope.embMachineCost = Math.round($rootScope.embMachineCost * 100) / 100;
        };

        $scope.changCmCost = function () {
            $rootScope.cmCost = $scope.cmCost;

            var cor = $rootScope.cmCost / $rootScope.smv;
            $rootScope.cor = Math.round(cor * 100) / 100;
        };

        $scope.calculatTargetFobSolid = function () {
            $rootScope.retailPriceSolid = $scope.retailPriceSolid;
            $scope.targetFobSolid = $rootScope.retailPriceSolid / 4;
            $rootScope.targetFobSolid = $scope.targetFobSolid;
        };

        $scope.changeTargetFobSolid = function () {
            $rootScope.targetFobSolid = $scope.targetFobSolid;
        };


        //-----------------view-10 funtions--------------------

        $scope.nextSummary = function () {
            if (!$rootScope.retailPricePrint) {
                Notification.error("please enter retail price");
            } else {
                $location.path("/view-11");
            }

        };

        $rootScope.calculateInitialFobPrint = function () {
            var fob =
                    parseFloat($scope.fabPrint)
                    + parseFloat($scope.trimPrint)
                    + parseFloat($scope.linerPrint)
                    + parseFloat($scope.handEmbellihshmentPrint)
                    + parseFloat($scope.machinePrint)
                    + parseFloat($scope.cupCost)
                    + parseFloat($scope.cmCost)
                    + parseFloat($scope.packingCostPrint);
            fob = Math.round(fob * 100) / 100;
            $rootScope.printInitialFob = fob;
            $scope.changePackingCostPrint();
            $scope.changeFabCostPrint();
            $scope.changeEmbellishmentCostPrint();
            $scope.machineCostPrint();
            $scope.linerCostPrint();
//            $scope.cmPrintCostPrint();
            $scope.handEmbellishmentCostPrint();
            $scope.changeLinerCost();
            $scope.changeTrimCost();
            $scope.changeMachineEmbCost();
            $scope.changeHandEmbCost();
            $scope.changCmCost();
            $scope.changeEmdTotal();
            $scope.changeCupCost();

            $scope.changeMachineEmbTotal();
            return fob;
        };

        $rootScope.calcAirCostPrint = function () {
            var data = null;
            if ($rootScope.calculateInitialFobSolid()) {
                if ($rootScope.mode === "Bottom") {
                    data = (($rootScope.printInitialFob * (24.90 / 100)) + $rootScope.printInitialFob + 0.002 + 0.267) * (110.62 / 100);
                    data = Math.round(data * 100) / 100;
                    return data;
                } else if ($rootScope.mode === "Top") {
                    data = (($rootScope.printInitialFob * (24.90 / 100)) + $rootScope.printInitialFob + 0.002 + 0.556) * (110.62 / 100);
                    data = Math.round(data * 100) / 100;
                    return data;
                } else {
                    data = (($rootScope.printInitialFob * (24.90 / 100)) + $rootScope.printInitialFob + 0.002 + 0.671) * (110.62 / 100);
                    data = Math.round(data * 100) / 100;
                    return data;
                }
            } else {
                return "0";
            }
        };

        $rootScope.calcSeaCostPrint = function () {
            var data = null;
            if ($rootScope.calculateInitialFobPrint()) {
                if ($rootScope.mode === "Bottom") {
                    data = (($rootScope.printInitialFob * (24.90 / 100)) + $rootScope.printInitialFob + 0.002 + 0.052) * (110.62 / 100);
                    data = Math.round(data * 100) / 100;
                    return data;
                } else if ($rootScope.mode === "Top") {
                    data = (($rootScope.printInitialFob * (24.90 / 100)) + $rootScope.printInitialFob + 0.002 + 0.109) * (110.62 / 100);
                    data = Math.round(data * 100) / 100;
                    return data;
                } else {
                    data = (($rootScope.printInitialFob * (24.90 / 100)) + $rootScope.printInitialFob + 0.002 + 0.134) * (110.62 / 100);
                    data = Math.round(data * 100) / 100;
                    return data;
                }
            } else {
                return "0";
            }
        };

        $scope.changeEmbellishmentCostPrint = function () {
            $rootScope.trimPrint = $scope.trimPrint;
        };

        $scope.linerCostPrint = function () {
            $rootScope.linerPrint = $scope.linerPrint;
        };

        $scope.machineCostPrint = function () {
            $rootScope.machinePrint = $scope.machinePrint;
        };

        $scope.handEmbellishmentCostPrint = function () {
            $rootScope.handEmbellihshmentPrint = $scope.handEmbellihshmentPrint;
        };

//        $scope.cmPrintCostPrint = function () {
//            $rootScope.cmPrint = $scope.cmPrint;
//        };


        $scope.changeFabCostPrint = function () {
            $rootScope.fabPrint = $scope.fabPrint;
        };

        $scope.changePackingCostPrint = function () {
            $rootScope.packingCostPrint = $scope.packingCostPrint;
        };

        // target air cost
        $scope.calculatTargetFobPrint = function () {
            $rootScope.retailPricePrint = $scope.retailPricePrint;
            $scope.targetFobPrint = $rootScope.retailPricePrint / 4;
            $rootScope.targetFobPrint = $scope.targetFobPrint;
        };

        $scope.changeTargetFobPrint = function () {
            $rootScope.targetFobPrint = $scope.targetFobPrint;
        };

        //--------- form 11 funtion / summary sheet ---------------

        $rootScope.calcSeaImuSolid = function () {
            var seaImu = ($rootScope.retailPriceSolid - $rootScope.calcSeaCostSolid()) / $rootScope.retailPriceSolid;
            seaImu = Math.round(seaImu * 100);
            $rootScope.seaImuSolid = seaImu;
            return seaImu;
        };

        $rootScope.calcSeaImuPrint = function () {
            var seaImu = ($rootScope.retailPricePrint - $rootScope.calcSeaCostPrint()) / $rootScope.retailPricePrint;
            seaImu = Math.round(seaImu * 100);
            $rootScope.seaImuPrint = seaImu;
            return seaImu;
        };

        $rootScope.calcAirImuSolid = function () {
            var airImu = ($rootScope.retailPriceSolid - $rootScope.calcAirCostSolid()) / $rootScope.retailPriceSolid;
            airImu = Math.round(airImu * 100);
            $rootScope.airImuSolid = airImu;
            return airImu;
        };

        $rootScope.calcAirImuPrint = function () {
            var airImu = ($rootScope.retailPricePrint - $rootScope.calcAirCostPrint()) / $rootScope.retailPricePrint;
            airImu = Math.round(airImu * 100);
            $rootScope.airImuPrint = airImu;
            return airImu;
        };

        // -----------------------last form 12 funtion--------------------------

        $scope.menu = function () {
            $rootScope.checkboxModel2 = false;
            $rootScope.checkboxModel = false;
            $rootScope.styleMeasure = "Y";
            $rootScope.viewnav = 'none';
            $rootScope.topImg = null;
        };

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
        
         $scope.shareClick = function () {
            $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'app/view/download-file.html',
                controller: 'viewController',
                scope: $scope,
                size: 'xs'
            });
        };

        $scope.exportData = function () {
            $uibModalStack.dismissAll();
//            location.href = "mailto:someone@example.com";
//            window.location = "mailto:joe@blogs.com&body=<html><body><h1>Hello world</h1></body></html>";
//            location.href = "mailto:?subject=Summary Sheet&body=<html><body><h1>hellow</h1></body></html>";
            var blob = new Blob([document.getElementById('printDiv').innerHTML], {
                type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
            });

            FileSaver.saveAs(blob, "" + $scope.fileName + ".xls");
            location.href = "mailto:?subject=Summary Sheet&body";
        };


        $scope.zoomPictureModal = function (picture) {
            $rootScope.zoomPicture = picture;
            $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'app/view/pictureModal.html',
                controller: 'viewController',
                size: 'xs'
            });
        };


        //----------------common funtions---------------
        
        $scope.getImage = function (path) {
            var url = systemConfig.apiUrl + "/api/style/app-image/" + path;
            return url;
        };

        $scope.logout = function () {
            document.getElementById("mySidenav").style.width = "0";
            $rootScope.viewnav = "hide";
            $location.path("#/");
        };
        
          //--------------menu funtions-----------------

        $scope.selectTop = function () {
            $rootScope.tiers = [];
            angular.forEach($rootScope.tierList, function (tiers) {
                if (tiers.category === "top") {
                    $rootScope.tiers.push(tiers);
                }
            });

            $rootScope.viewnav = "show";
            $rootScope.mode = "Top";
            $rootScope.topImg = "./img/top.PNG";
            $rootScope.myStyle = {
                "width": "12%"
            };
        };

        $scope.selectBottom = function () {
            $rootScope.tiers = [];
            angular.forEach($rootScope.tierList, function (tiers) {
                if (tiers.category === "bottom") {
                    $rootScope.tiers.push(tiers);
                }
            });
            $rootScope.topImg = "./img/bottom.PNG";
            $rootScope.mode = "Bottom";
            $rootScope.viewnav = "show";
            $rootScope.myStyle = {
                "width": "14%"
            };
        };

        $scope.selectOnePiece = function () {
            $rootScope.tiers = [];
            angular.forEach($rootScope.tierList, function (tiers) {
                if (tiers.category === "one-piece") {
                    $rootScope.tiers.push(tiers);
                }
            });
            $rootScope.mode = "One-Piece";
            $rootScope.viewnav = "show";
            $rootScope.topImg = "./img/onepiece.PNG";
            $rootScope.myStyle = {
                "width": "12%"
            };
        };



        $scope.inint = function () {
            //----------------------get Styles----------------------

              if ($rootScope.mode === 'Bottom') {
                var url = systemConfig.apiUrl + "/api/style/all-style/" + "bottom";
                $http.get(url)
                        .success(function (data) {
                            $scope.styleList = data;
                        });
            }
            if ($rootScope.mode === 'Top') {
                var url = systemConfig.apiUrl + "/api/style/all-style/" + "top";
                $http.get(url)
                        .success(function (data) {
                            $scope.styleList = data;
                        });
            }
            if ($rootScope.mode === 'One-Piece') {
                var url = systemConfig.apiUrl + "/api/style/all-style/" + "one-piece";
                $http.get(url)
                        .success(function (data) {
                            $scope.styleList = data;
                        });
            }

            var url = systemConfig.apiUrl + "/api/embellishment";
            $http.get(url)
                    .success(function (data) {
                        $scope.embllishments = data;
                        ;
                    });

            //get tiers
            var url = systemConfig.apiUrl + "/api/tiers";
            $http.get(url)
                    .success(function (data) {
                        $rootScope.tierList = data;
                        ;
                    });


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
            if (!$rootScope.styleMeasure) {
                $rootScope.styleMeasure = "Y";
            }
        };

        $scope.inint();
    };

    angular.module("viewModule")
            .controller("viewController", viewController);
}());