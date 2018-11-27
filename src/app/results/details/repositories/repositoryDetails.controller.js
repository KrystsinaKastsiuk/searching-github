(function(){
  'use strict';
  angular
  .module('gitHubSearch')
  .controller('RepoDetailsCtrl', RepoDetailsCtrl);

  RepoDetailsCtrl.$inject = ['$state', '$stateParams', 'dataService'];

  function RepoDetailsCtrl($state, $stateParams, dataService) {
    const repoDetailsCtrl = this;   
    
    repoDetailsCtrl.request = $stateParams.request;

    dataService.findRepositoryDetails().then( response => {
      repoDetailsCtrl.repoDetails = response;
    });

    repoDetailsCtrl.backRepositoriesPage = function() {
      $state.go("search.results.repositories", {request: repoDetailsCtrl.request});
    }
  }
})();