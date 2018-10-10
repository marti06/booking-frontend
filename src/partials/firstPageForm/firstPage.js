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
                scope.selectedIcon = "";
                scope.icons = [
                    {value:"Happy Birthday",label    :"Happy Birthday <i class=\"fa fa-birthday-cake\"></i>"},
                    {value:"Take a break",label :"Take a break <i class=\"fa fa-plane\"></i>"},
                    {value:"Christmas cheer",label :"Christmas cheer <i class=\"fa fa-star\"></i>"},
                    {value:"Just married",label:"Just married <i class=\"fa fa-smile\"></i>"},
                    {value:"I miss you",label:"I miss you <i class=\"fa fa-globe\"></i>"},
                    {value:"Go save the planet",label:"Go save the planet <i class=\"fa fa-camera\"></i>"}
                    ];

                scope.findThePerfectGift = () => {
                    console.log(scope.options);
                    $window.localStorage.setItem('travelOptionsTheme', scope.options.theme);
                    $window.localStorage.setItem('travelOptionsTravel', scope.options.travel.unplanned);
                    $window.open('http://c9b1ead3.ngrok.io/#/unplanned');
                }
            }
        };
    }

})();
