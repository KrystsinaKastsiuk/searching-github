(function(){
  'use strict';
  
  angular
    .module('gitHubSearch')
    .component('pagination', {
      templateUrl: 'app/pagination/pagination.html',
      controller: 'PaginationCtrl',
      controllerAs: 'paginationCtrl'
    })
  })();