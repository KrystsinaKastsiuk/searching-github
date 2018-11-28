(function(){
  'use strict';
  
  angular
    .module('gitHubSearch')
    .component('resultsPage', {
      templateUrl: 'app/results/results.html',
      controller: 'ShowResults',
      controllerAs: 'resultsCtrl'
    })
  })();