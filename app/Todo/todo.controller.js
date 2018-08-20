angular.module("ToDo")
    .controller("ToDoController",["$scope","TodoService", function($scope, TodoService ){

        //MODEL - Properties and Behaviors
        $scope.newItem = "Grocerries";
        $scope.items = [];

        TodoService.get('http://demo4180697.mockable.io/todos')
            .then(function successCallback(response) {
                $scope.items = response.data.todo;
                console.log(response);
            }, function errorCallback(response) {
                console.log(response);
            });


        $scope.addItemToList = function(){

            if($scope.newItem.trim() !== ""){
                $scope.items.push($scope.newItem);
                $scope.newItem="";
            }
        };

        var [ a , b ] = [3,4];

        $scope.removeItem = function(index){
            $scope.items.splice(index,1);
        }

    }]);