(function () {
    angular.module("adminModule", []);

    var adminController = function ($http, $scope, $rootScope, systemConfig) {
        //ui models
        $scope.ui = {};



        //--------------------ui funtions--------------------
        $scope.ui.new = function () {
            $scope.ui.mode = "NEW";
        };

        $scope.ui.save = function () {
            $scope.ui.mode = "IDEAL";
        };


        $scope.ui.init = function () {
            //set ideal mode
            $scope.ui.mode = "IDEAL";
            //load style
            var url = systemConfig.apiUrl + "/api/style/all-style";

            $http.get(url)
                    .success(function (data) {
                        $scope.styles = data;
                    });

        };

        $scope.ui.init();

    };






    angular.module("adminModule")
            .controller("adminController", adminController);
}());