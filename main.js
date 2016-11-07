var module = angular.module('main', ['ui.knob']);
module.controller('mainController', function($scope, $interval) {
    $scope.model = {
        value: 0,
        options: {
            readOnly: true,
            animate: {enabled: true, duration: 1000, ease: 'bounce'},
            startAngle: -140,
            endAngle: 140,
            size: 118,
            unit: '',
            trackColor: 'rgb(255,255,255)',
            barColor: '#005CA8',
            trackWidth: 10,
            textColor: '#005CA8',
            barWidth: 10,
            fontSize: 41,
            subText: {
                enabled: true,
                text: 'km/h',
                color: '#005CA8'
            },
            min: 0,
            max: 3,
            dynamicOptions: true
        }
    };

    $interval(function () {
        $scope.model.value++;
        $scope.model.value = $scope.model.value % 7;
    }, 2000);
});
