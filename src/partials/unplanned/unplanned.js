(function() {

    'use strict';

    angular
        .module('booking')
        .controller('UnplannedController', UnplannedController);

    function UnplannedController($scope, $window) {

        let vm = this;
        let theme = $window.localStorage.getItem('travelOptionsTheme');
        let travelType = $window.localStorage.getItem('travelOptionsTravel')


    }

})();
