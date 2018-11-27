(function(){
  'use strict';
  angular
  .module('gitHubSearch')
  .controller('RepositoryCtrl', RepositoryCtrl);

  RepositoryCtrl.$inject = ['$state', '$stateParams', 'dataService'];

  function RepositoryCtrl($state, $stateParams, dataService) {
    const repoCtrl = this;    

    repoCtrl.request =  $stateParams.request;
    
    dataService.findData('repositories', repoCtrl.request).then( response => {
      repoCtrl.repositories = response.items;
      console.log("repoData", repoCtrl.repositories);
    });

    repoCtrl.sendRepositoryDetails = function(name, repo) {
      repoCtrl.name = name;      
      repoCtrl.repo = repo;
      $state.go("search.results.repositoryDetails", {repo: repoCtrl.repo});
    }
  }
})();