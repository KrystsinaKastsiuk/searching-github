(function(){
  'use strict';
  angular
  .module('gitHubSearch')
  .controller('RepoDetailsCtrl', RepoDetailsCtrl);

  RepoDetailsCtrl.$inject = ['$state', '$stateParams', 'dataService'];

  function RepoDetailsCtrl($state, $stateParams, dataService) {
    const repoDetailsCtrl = this;   
    
    repoDetailsCtrl.request = $stateParams.request;
    repoDetailsCtrl.name = $stateParams.name;
    repoDetailsCtrl.repo = $stateParams.repo;

    dataService.findRepositoryDetails(repoDetailsCtrl.name, repoDetailsCtrl.repo).then( response => {
      repoDetailsCtrl.repoDetails = response;
      console.log("repoDetails", response);
      repoDetailsCtrl.owner = response[0].owner.login;
      repoDetailsCtrl.avatar = response[0].owner.avatar_url;
    });

    repoDetailsCtrl.backRepositoriesPage = function() {
      $state.go("search.results.repositories", {request: repoDetailsCtrl.request});
    }
  }
})();