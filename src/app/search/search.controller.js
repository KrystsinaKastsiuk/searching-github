(function(){
  'use strict';
  angular
    .module('gitHubSearch')
    .controller('SearchData', SearchData);

    SearchData.$inject = ['$rootScope', '$scope', '$state', '$stateParams'];

    function SearchData($rootScope, $scope, $state, $stateParams) {
      const searchCtrl = this;
      searchCtrl.request = $stateParams.request;

      searchCtrl.sendRequests = function() {
        $state.go("search.results", {request: searchCtrl.request});
      };
    }
})();