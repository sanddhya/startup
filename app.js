var startupSmb = angular.module('startupSmb', ['ng', 'ngRoute', 'ui.router','ui.bootstrap']);

startupSmb.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/home/?id',
                templateUrl: 'app/solutions/views/homePage.html',
                controller: 'homePageController'
            })
        $urlRouterProvider.otherwise('/home/');
    }]);

