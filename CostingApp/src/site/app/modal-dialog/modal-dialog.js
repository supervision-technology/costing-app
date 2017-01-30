(function () {
    angular.module("indexModule")
            .service("ModalDialog", function () {

                var ctrl = function () {
                    function Controller(modalInstance, $timeout) {
                        //modal instance
                        this.modalInstance = modalInstance;
                        this.timeout = $timeout;
                    }

                    Controller.prototype = {
                        close: function () {
                            var scope = this;
                            this.timeout(function () {
                                scope.modalInstance.close();
                            }, 250);
                        }
                    };

                    return ['$uibModalInstance', '$timeout', Controller];
                };
            });
}());
