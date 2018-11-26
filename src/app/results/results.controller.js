(function(){
  'use strict';
  angular
  .module('gitHubSearch')
  .controller('ShowResults', ShowResults);

  ShowResults.$inject = ['$state', '$stateParams', 'dataService'];

  function ShowResults($state, $stateParams, dataService) {
    const ctrl = this;    
    this.displayMenu = false;

    ctrl.request = $stateParams.request;

    ctrl.usersTotal = 0;
    ctrl.repositoriesTotal = 0;
    ctrl.issuesTotal = 0;
    ctrl.codesTotal = 0;

    ctrl.menus = [
      {item: 'users', amount: ctrl.usersTotal},
      {item: 'repositories', amount: ctrl.repositoriesTotal},
      {item: 'issues', amount: ctrl.issuesTotal},
      {item: 'codes', amount: ctrl.codesTotal}
    ];

    ctrl.itemMenu = ctrl.menus[0].item;

    // init();
    returnTotal();

    function init() {
      dataService.findData(ctrl.itemMenu, ctrl.request).then( response => {
        ctrl.itemsData = response.items;
      });
    };

    function returnTotal() {
      dataService.findData('users', ctrl.request).then( response => {
        ctrl.usersTotal = response.total_count;
      });

      dataService.findData('repositories', ctrl.request).then( response => {
        ctrl.repositoriesTotal = response.total_count;
      });

      dataService.findData('issues', ctrl.request).then( response => {
        ctrl.issuesTotal = response.total_count;
      });

      dataService.findData('codes', ctrl.request).then( response => {
        ctrl.codesTotal = response.total_count;
      });
    };
    
    ctrl.clickUsersItem = function() {
      $state.go("search.results.users", {request: ctrl.request});
    };

    ctrl.clickRepositoriesItem = function() {
      $state.go("search.results.repositories", {request: ctrl.request});
    }    
    
    ctrl.clickIssuesItem = function() {
      $state.go("search.results.issues", {request: ctrl.request});
    }    
    
    ctrl.clickCodesItem = function() {
      $state.go("search.results.codes", {request: ctrl.request});
    }    
  }
})();