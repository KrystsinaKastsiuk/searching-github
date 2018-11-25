(function(){
  'use strict';
  
  angular
    .module('searchingGithub')
    .component('searchResultsPage', {
      templateUrl: 'src/app/results/results.html',
      controller: 'showResults',
      controllerAs: 'ctrl'
    })
  })();