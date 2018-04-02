angular.module("myapp", ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('home', {
    url:"/",
    templateUrl:"../views/home.html",
    controller: "mainCtrl"
  })
  .state('about',{
    url: "/about",
    templateUrl: "../views/about.html"
  })
  .state('contact',{
    url: "/contact",
    templateUrl: "../views/contact.html"
  })
$urlRouterProvider.otherwise("/");
})