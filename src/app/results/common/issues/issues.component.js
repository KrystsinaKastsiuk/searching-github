(function(){
  'use strict';
  
  angular
    .module('gitHubSearch')
    .component('issuesList', {
      templateUrl: 'app/results/common/issues/issues.html',
      controller: 'IssueCtrl',
      controllerAs: 'issueCtrl'
    })
  })();