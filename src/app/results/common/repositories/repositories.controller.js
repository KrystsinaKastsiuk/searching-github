(function(){
  'use strict';
  angular
  .module('gitHubSearch')
  .controller('RepositoryCtrl', RepositoryCtrl);

  RepositoryCtrl.$inject = ['$stateParams', 'dataService'];

  function RepositoryCtrl($stateParams, dataService) {
    const repoCtrl = this;    

    repoCtrl.request =  $stateParams.request;
    
    dataService.findData('repositories', repoCtrl.request).then( response => {
      repoCtrl.repositories = response.items;
    });
  }
})();