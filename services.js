startupSmb.factory('serviceForApiCall', ['$http', function ($http) {
    return {
        sendEvent: function (eventName, id) {
            return $http.get('https://ad-tracker-standard-dot-datatest-148118.appspot.com/survey?idx=' + id + '&event=' + eventName);
        }
    }
}]);