(function(){
  'use strict';
  angular
  .module('gitHubSearch')
  .controller('IssueCtrl', IssueCtrl);

  IssueCtrl.$inject = ['$stateParams', 'dataService'];

  function IssueCtrl($stateParams, dataService) {
    const issueCtrl = this;    

    issueCtrl.request =  $stateParams.request;
    
    dataService.findData('issues', issueCtrl.request).then( response => {
      issueCtrl.issues = response.items;
    });
  }
})();