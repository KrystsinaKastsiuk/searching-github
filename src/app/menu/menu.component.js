(function(){
  'use strict';
  
  angular
    .module('gitHubSearch')
    .component('menu', {  
      templateUrl: 'app/menu/menu.html',
      controller: 'ShowResults',
      controllerAs: 'resultsCtrl'
    })
  })();