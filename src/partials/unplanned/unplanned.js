(function() {

    'use strict';

    angular
        .module('booking')
        .controller('UnplannedController', UnplannedController);

    function UnplannedController($scope, $window) {

        let uc = this;
        let theme = $window.localStorage.getItem('travelOptionsTheme');
        let travelType = $window.localStorage.getItem('travelOptionsTravel')
        $scope.giftAmount = '';
        $scope.showSecondPage = true;
        $scope.showThirdPage = false;
        $scope.currency = 'EUR';
        $scope.giver = {};
        $scope.receiver = {};
        document.getElementById("backgroundImageDiv").style.backgroundImage = "url('http://192.168.10.216:3000/static/images/christmas.jpg')";


        $scope.viewGiftOptionsBtn = () => {
            //$window.localStorage.setItem('travelOptionsAmount', $scope.giftAmount);
            $scope.showSecondPage = false;
            document.getElementById('backgroundImageDiv').style.backgroundImage = ''
        };

        $scope.completeOrder = () => {
            let request = new XMLHttpRequest();

            let dataToSend = {
                'receiverEmail' : $scope.receiver.email,
                'receiverName' : $scope.receiver.name,
                'receiverLastName' : $scope.receiver.lastName,
                'senderEmail' : $scope.giver.email,
                'amount' : $scope.giftAmount,
                'senderName' : $scope.giver.name,
                'senderLastName' : $scope.giver.lastName,
                'citySuggestions' : ['city1', 'city2', 'city3'],
                'note' : 'Hi there happy birthday!',
                'currency' : $scope.currency
            };

            console.log(dataToSend);
            request.open('POST', 'http://192.168.10.216:3000/api/booking/createUnplannedGift', true);
            request.withCredentials = false;
            request.setRequestHeader('Content-Type', 'application/json');
            request.send(JSON.stringify(dataToSend));
            $scope.giver = {};
            $scope.receiver = {};
            $scope.showThirdPage = true;
            $scope.showSecondPage = false;
        }
    }

})();
