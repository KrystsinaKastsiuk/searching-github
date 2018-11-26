(function(){
  'use strict';
  
  angular
    .module('gitHubSearch')
    .component('resultsPage', {
      templateUrl: 'src/app/results/results.html',
      controller: 'ShowResults',
      controllerAs: 'resultsCtrl'
    })
  })();