angular.module("App")
    .service('TodoService', ["$http", function($http){
        return {
            get: function(url){
                return $http.get(url);
            }
        }
    }]);



