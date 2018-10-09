(function() {

    'use strict';

    angular
        .module('booking')
        .directive('gcShare', gcShare);

    function gcShare($uibModal) {
        return {
            restrict: 'E',
            templateUrl: '/static/partials/gcBtn/giftCard.html',
            link: function(scope) {
                scope.openGiftForm = () => {
                    let _modalInstance = $uibModal.open({
                        windowClass: 'share-modal-parent',
                        template: '<gc-first-page close="close"></gc-first-page>',
                        controller: ($scope) => {
                            $scope.close = () => _modalInstance.close();
                        }
                    });


                }

            }
        };
    }

})();
