(function() {

    'use strict';

    angular
        .module('booking')
        .directive('gcFirstPage', gcFirstPage);

    function gcFirstPage($rootScope, $location, $window) {
        return {
            restrict: 'E',
            templateUrl: '/static/partials/firstPageForm/firstPage.html',
            scope: {
                close: '='
            },
            link: function(scope) {

                scope.options = {};

                scope.findThePerfectGift = () => {
                    console.log(scope.options);
                    $window.localStorage.setItem('travelOptionsTheme', scope.options.theme);
                    $window.localStorage.setItem('travelOptionsTravel', scope.options.travel.unplanned);
                    $window.open('http://192.168.10.216:3000/#/unplanned');
                }
            }
        };
    }

})();
