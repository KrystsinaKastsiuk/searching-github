(function(){
  'use strict';
  angular
    .module('searchingGithub')
    .controller('searchData', searchData);

    searchData.$inject = ['$rootScope', '$scope', '$state', '$stateParams', 'transferData'];

    function searchData($rootScope, $scope, $state, $stateParams, transferData) {
      const ctrl = this;
      ctrl.request = $stateParams.request;

      ctrl.showRequests = function() {
        $state.go("search.results", {request: ctrl.request});
        transferData.setRequest(ctrl.request);
      };
    }
})();