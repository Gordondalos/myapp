var myApp = angular.module('myApp', []);


myApp.directive('backImg', function(){
    return function(scope, element, attrs){
        var url = attrs.backImg;
        element.css({
            'background-image': 'url(' + url +')',
            'background-size' : 'cover'
        });
    };
});


myApp.controller("PhotoController", ["$scope",'$http', function ($scope,$http) {

    $scope.addPhoto =  function (q) {
        console.log(q);


    };

    $scope.q =     {
        photos: [
            {
                name: "Первая фотка",
                src: 'http://wnature.net/pictures/2014/02/243/krasivaya-polosataya-tropicheskaya-rybka.jpg'
            }
        ],
        client: 'Василий Теркин',
        date: '2016-09-01',
        number: 200,
        partner: 13,
        shop: 'amason.com'

    };

    $scope.qr = [

                    {
                        photos: [],
                        client: 'Василий Теркин',
                        date: '2016-09-01',
                        number: 200,
                        partner: 13,
                        shop: 'amason.com'

                    },
                    {
                        photos: [],
                        client: 'Василий Пупкин',
                        date: '2016-09-02',
                        number: 201,
                        partner: 14,
                        shop: 'TaoBao.com'
                    },
                    {
                        photos: [],
                        client: 'Иванов Иван Иванович',
                        date: '2016-09-03',
                        number: 202,
                        partner: 15,
                        shop: 'http://sport.com/'
                    },
                    {
                        photos: [],
                        client: 'Петров Петр Петрович',
                        date: '2016-09-04',
                        number: 203,
                        partner: 16,
                        shop: 'watch.com'
                    }

    ];





}]);

