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

                    let request = new XMLHttpRequest();

                    request.open("POST", '/api/booking/createGift', true);
                    request.withCredentials = false;
                    request.setRequestHeader('Content-Type', 'application/json');

                    request.onload = function() {
                        console.log(request.responseText);
                    };
                }

            }
        };
    }

})();
