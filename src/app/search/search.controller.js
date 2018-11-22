(function(){
  'use strict';
  angular
  .module('searchingGithub')
  .controller('searchData', searchData);

  searchData.$inject = ['$rootScope', '$scope', '$state', '$stateParams', 'dataService', 'transferData'];

  function searchData($rootScope, $scope, $state, $stateParams, dataService, transferData) {
    const ctrl = this;
    ctrl.request = $stateParams.request;

    //************* С помощью событий ***************/
    // $rootScope.$broadcast('eventName',  ctrl.request);
    

    ctrl.showRequests = function() {
      $state.go("search.results", {request: ctrl.request});

      //************* С помощью сервиса ***************/
      //******* значение с сервиса приходит праввильно ********/
      transferData.setRequest(ctrl.request);
    };
  }
})();