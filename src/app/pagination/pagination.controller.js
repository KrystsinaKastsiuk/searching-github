(function(){
  'use strict';
  
  angular
    .module('gitHubSearch')
    .controller('PaginationCtrl', PaginationCtrl);

    PaginationCtrl.$inject = ['$state', '$stateParams', 'dataService'];

    function PaginationCtrl($state, $stateParams, dataService) {
      const paginationCtrl = this;

      // paginationCtrl.value = $stateParams.value;
      paginationCtrl.request = $stateParams.request;

      paginationCtrl.currentPage = 1;
      paginationCtrl.itemsPerPage = 20;


      /////////////////////////////////////////

      paginationCtrl.totalItems = 100;
      paginationCtrl.currentPage = 1;
      paginationCtrl.maxSize = 1;

      /////////////////////////////////////////
      
      dataService.findData('users', paginationCtrl.request).then( response => {
        paginationCtrl.items = response;
      });

      paginationCtrl.numberOfPages = function () {
        return Math.ceil(paginationCtrl.items.length / paginationCtrl.itemsPerPage);
      };
    }
})();