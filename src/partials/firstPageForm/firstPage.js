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

                scope.options = {
                    theme: '',
                    travel: 'unplanned'
                };
                scope.themes = ["Marry Christmas", "Take a brake", "Miss u"];

                scope.findThePerfectGift = () => {
                    $rootScope.travelOptions = scope.options;
                    console.log(scope.options);
                    //$location.url('/unplanned');
                    //scope.url = 'http://localhost:3000/#/unplanned';
                    $window.localStorage.setItem('travelOptionsTheme', scope.options.theme);
                    $window.localStorage.setItem('travelOptionsTravel', scope.options.travel);
                    $window.open('http://localhost:3000/#/unplanned');
                }
            }
        };
    }

})();
