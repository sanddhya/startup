var startupSmb = angular.module('startupSmb', ['ng', 'ngRoute', 'ui.router', 'ui.bootstrap']);

startupSmb.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/home/?id',
                templateUrl: 'app/solutions/views/homePage.html',
                controller: 'homePageController'
            })
            .state('survey', {
                url: '/survey/?id',
                templateUrl: 'app/solutions/views/survey.html',
                controller: 'surveyPageController'
            })
        $urlRouterProvider.otherwise('/home/');
    }]);

