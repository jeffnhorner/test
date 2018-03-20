angular.module("test", ["ui-routher"])

//state provider is essetnailly a state/pages for each page
.config(function($stateProvider, $urlRouterProvider){

//Now list different states/pages you'll page
$urlRouterProvider.otherwise("/");

$stateProvider
  .state("home", {
    //url you type into browers
    url: '/',
    //where the browser pulls your page (file) from
    templateUrl: '../index.html',
    controller: 'mainCtrl'
  })
  .state("about", {
    url:"/about",
    templateUrl: "views/about.html",
    // controller: "mainCtrl"
  })
  .state("contact", {
    url:"/contact",
    templateUrl: "views/contact.html",
    // controller: "mainCtrl"
  })




})