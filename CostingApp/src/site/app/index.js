(function () {
    //index module
    angular.module("indexModule", [
        "ngRoute",
        "ngCookies",
        "ui.bootstrap",
        "viewModule",
        "loginModule",
        "adminModule",
        "tierModule",
        "embellishmentModule",
        "styleModule",
        "userModule"
    ]);

    //constants
    angular.module("indexModule")
            .constant("systemConfig", {
                apiUrl:
                        location.hostname === 'localhost'
                        ? "http://localhost:8080"
                        : location.protocol + "//" + location.hostname
            });

    //route config
    angular.module("indexModule")
            .config(function ($routeProvider) {
                $routeProvider
                        //user
                        .when("/", {
                            templateUrl: "app/login/login.html",
                            controller: "loginController"
                        })
                        .when("/view-1", {
                            templateUrl: "app/view/view1.html",
                            controller: "viewController"
                        })
                        .when("/liner-cost", {
                            templateUrl: "app/view/linerCost.html",
                            controller: "viewController"
                        })
                        .when("/cup-cost", {
                            templateUrl: "app/view/cupCost.html",
                            controller: "viewController"
                        })
                        .when("/cup-cost2", {
                            templateUrl: "app/view/cupCost2.html",
                            controller: "viewController"
                        })
                        .when("/view-2", {
                            templateUrl: "app/view/view2.html",
                            controller: "viewController"
                        })
                        .when("/view-3", {
                            templateUrl: "app/view/view3.html",
                            controller: "viewController"
                        })
                        .when("/liner-styles", {
                            templateUrl: "app/view/linerCostStyles.html",
                            controller: "viewController"
                        })
                        .when("/view-4", {
                            templateUrl: "app/view/view4.html",
                            controller: "viewController"
                        })
                        .when("/view-5", {
                            templateUrl: "app/view/view5.html",
                            controller: "viewController"
                        })
                        .when("/hand-embellishment", {
                            templateUrl: "app/view/handEmbellishment.html",
                            controller: "viewController"
                        })
                        .when("/view-6", {
                            templateUrl: "app/view/view6.html",
                            controller: "viewController"
                        })
                        .when("/machine-embllishment", {
                            templateUrl: "app/view/machineEmbliishment.html",
                            controller: "viewController"
                        })
                        .when("/machine-embllishments", {
                            templateUrl: "app/view/embllishments.html",
                            controller: "viewController"
                        })
                        .when("/view-7", {
                            templateUrl: "app/view/view7.html",
                            controller: "viewController"
                        })
                        .when("/view-8", {
                            templateUrl: "app/view/view8.html",
                            controller: "viewController"
                        })
                        .when("/view-9", {
                            templateUrl: "app/view/view9.html",
                            controller: "viewController"
                        })
                        .when("/view-10", {
                            templateUrl: "app/view/view10.html",
                            controller: "viewController"
                        })
                        .when("/view-11", {
                            templateUrl: "app/view/view11.html",
                            controller: "viewController"
                        })
                        .when("/view-12", {
                            templateUrl: "app/view/view12.html",
                            controller: "viewController"
                        })
                        //admin
                        .when("/login-admin", {
                            templateUrl: "app/login/admin-login.html"
//                            controller: "loginController"
                        })

                        .when("/admin", {
                            templateUrl: "app/admin/home.html"
                        })
                        .when("/admin/style", {
                            templateUrl: "app/admin/style/new-style.html",
                            controller: "styleController"
                        })
                        .when("/admin/styles", {
                            templateUrl: "app/admin/style/pending-styles.html",
                            controller: "styleController"
                        })
                        .when("/admin/embelleshment", {
                            templateUrl: "app/admin/embellishment/embellishment.html",
                            controller: "embellishmentController"
                        })
                        .when("/admin/tiers", {
                            templateUrl: "app/admin/tier/tier.html",
                            controller: "tierController"
                        })
                        .when("/admin/user-registraion", {
                            templateUrl: "app/admin/user/user-registration.html",
                            controller: "userController"
                        })

                        .otherwise({
                            redirectTo: "/"
                        });
            });



    angular.module("indexModule")
            .controller("indexController", function ($scope, $rootScope, $location) {
                $scope.logout = function () {
                    document.getElementById("mySidenav").style.width = "0";
                    $rootScope.viewnav = "hide";
                    $location.path("#/");
                };
            });
}());

