(function () {
    //index module
    angular.module("indexModule", [
        "ngRoute",
        "ngCookies",
        "loginModule",
        "viewModule"
    ]);

    //constants
    angular.module("indexModule").constant("systemConfig", {
        apiUrl: "http://localhost:8080"
    });

    //route config
    angular.module("indexModule")
            .config(function ($routeProvider) {
                $routeProvider
                        //user
                        .when("/", {
                            templateUrl: "app/user/login/login.html",
                            controller: "loginController"
                        })
                        .when("/view-1", {
                            templateUrl: "app/user/view/view1.html",
                            controller: "viewController"
                        })
                        .when("/view-2", {
                            templateUrl: "app/user/view/view2.html",
                            controller: "viewController"
                        })
                        .when("/view-3", {
                            templateUrl: "app/user/view/view3.html",
                            controller: "viewController"
                        })
                        .when("/view-4", {
                            templateUrl: "app/user/view/view4.html",
                            controller: "viewController"
                        })
                        .when("/view-5", {
                            templateUrl: "app/user/view/view5.html",
                            controller: "viewController"
                        })
                        .when("/view-6", {
                            templateUrl: "app/user/view/view6.html",
                            controller: "viewController"
                        })
                        .when("/view-7", {
                            templateUrl: "app/user/view/view7.html",
                            controller: "viewController"
                        })
                        .when("/view-8", {
                            templateUrl: "app/user/view/view8.html",
                            controller: "viewController"
                        })
                        .when("/view-9", {
                            templateUrl: "app/user/view/view9.html",
                            controller: "viewController"
                        })
                        .when("/view-10", {
                            templateUrl: "app/user/view/view10.html",
                            controller: "viewController"
                        })
                        .when("/view-11", {
                            templateUrl: "app/user/view/view11.html",
                            controller: "viewController"
                        })
                        .when("/view-12", {
                            templateUrl: "app/user/view/view12.html",
                            controller: "viewController"
                        })
//                admin
                        .when("/admin", {
                            templateUrl: "app/admin/index.html"
                        })
                        .when("/style", {
                            templateUrl: "app/admin/style/style.html"
                        })
                        .when("/summary", {
                            templateUrl: "app/admin/summary/summary.html"
                        })
                        .when("/registration", {
                            templateUrl: "app/admin/registration/registration.html"
                        })

                        .otherwise({
                            redirectTo: "/"
                        });
            });
}());

