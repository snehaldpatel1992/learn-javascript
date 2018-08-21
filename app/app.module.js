angular.module("App",["ui.router","Login","ToDo"])
    .config(function($stateProvider) {

        $stateProvider.state({
            name: 'login',
            url: '/login',
            templateUrl: 'app/Login/login.template.html'
        })
        .state({
            name: 'todo',
            url: '/todo',
            templateUrl: 'app/Todo/todo.template.html'

        });
    })
    .config(function routeConfig($stateProvider, $urlRouterProvider) {

        // set default routes when no path specified
        $urlRouterProvider.when('', '/todo');
        $urlRouterProvider.when('/', '/todo');
        $urlRouterProvider.otherwise('/todo');

    });








