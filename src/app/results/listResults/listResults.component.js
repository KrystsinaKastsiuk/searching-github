(function(){
  'use strict';
  
  angular
    .module('searchingGithub')
    .component('listPage', {
      templateUrl: 'src/app/results/listResults/listResults.html',
      controller: 'searchData',
      controllerAs: 'getData'
    })
  })();