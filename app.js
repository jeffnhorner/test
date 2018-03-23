angular.module("myapp", ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/")
  $stateProvider
  .state('home', {
    url:"/",
    templateUrl:"index.html",
    controller: "mainCtrl"
  })
  .state('about',{
    url: "/about",
    templateUrl: "about.html",
    controller: "mainCtrl"
  })
  .state('contact',{
    url: "/contact",
    templateUrl: "./views/about.html"
  })

})