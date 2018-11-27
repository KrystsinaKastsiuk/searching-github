(function(){
  'use strict';
  
  angular
    .module('gitHubSearch')
    .component('repositoryDetails', {
      templateUrl: 'app/results/details/repositories/repositoryDetails.html',
      controller: 'RepoDetailsCtrl',
      controllerAs: 'repoDetailsCtrl'
    })
  })();