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

   

        $scope.ui.init = function () {
            //set ideal mode
            $scope.ui.mode = "IDEAL";
            //load style
          

        };

        $scope.ui.init();

    };

    angular.module("adminModule")
            .controller("adminController", adminController);
}());