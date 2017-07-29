var jiffApp = angular.module('jiffApp', [
	"ngRoute",
  "dashboard",
  "home"
]); 

jiffApp.config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/dashboard', {
          template: '<dashboard></dashboard>'
        }).
        when('/home', {
          template: '<home></home>'
        }).
        otherwise('/dashboard');
    }
]);
