(function(){
  'use strict';
  angular
  .module('searchingGithub')
  .controller('showResults', showResults);

  showResults.$inject = ['dataService', '$scope', 'transferData'];

  function showResults(dataService, $scope, transferData) {
    const ctrl = this;

    $scope.$on('changedInputValue', function () {
      getResponse();
    });

    getResponse();

    function getResponse() {
      ctrl.request = transferData.getRequest();

      dataService.findData('users', ctrl.request).then( response => {
        $scope.users = response.items;
        return $scope.users;  
      });
    };
  }
})();