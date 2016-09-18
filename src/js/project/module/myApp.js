var myApp = angular.module('myApp', []);



myApp.controller("PhotoController", ["$scope", function ($scope) {
    $scope.qr = [

        {
            client: 'Василий Теркин',
            date: '2016-09-01',
            number: 200,
            partner: 13,
            shop: 'amason.com'
        },
        {
            client: 'Василий Пупкин',
            date: '2016-09-02',
            number: 201,
            partner: 14,
            shop: 'TaoBao.com'
        },
        {
            client: 'Иванов Иван Иванович',
            date: '2016-09-03',
            number: 202,
            partner: 15,
            shop: 'http://sport.com/'
        },
        {
            client: 'Петров Петр Петрович',
            date: '2016-09-04',
            number: 203,
            partner: 16,
            shop: 'watch.com'
        }

    ]
}]);

