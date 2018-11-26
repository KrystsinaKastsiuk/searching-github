(function(){
  'use strict';
  
  angular
    .module('gitHubSearch')
    .component('repositoriesList', {
      templateUrl: 'src/app/results/common/repositories/repositories.html',
      controller: 'RepositoryCtrl',
      controllerAs: 'repoCtrl'
    })
  })();