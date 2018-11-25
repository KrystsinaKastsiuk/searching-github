(function(){
  'use strict';
  angular
  .module('searchingGithub')
  .controller('showResults', showResults);

  showResults.$inject = ['dataService', '$scope', 'transferData'];

  function showResults(dataService, $scope, transferData) {
    const ctrl = this;

    init();

    function init() {
      ctrl.request = transferData.getRequest();
      dataService.findData('users', ctrl.request).then( response => {
        ctrl.users = response.items;
        return ctrl.users;  
      });
    };
  }
})();