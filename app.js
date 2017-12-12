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

startupSmb.config(function ($sceProvider) {
    $sceProvider.enabled(false);
});

startupSmb.directive("scroll", function ( $rootScope) {
return {
  link: function(scope, element, attrs) {
      window.onscroll = function(ev) {
                if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight-200) {
                  // you're at the bottom of the page
                  $(element).find('#scrollDownBtn').css('display','none');
               }else{
                    $(element).find('#scrollDownBtn').css('display','block');
               }
            };
    }
}
})

