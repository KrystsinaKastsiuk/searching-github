(function(){
  'use strict';
  
  angular
    .module('gitHubSearch')
    .component('searchPage', {
      templateUrl: 'app/search/search.html',
      controller: 'SearchData',
      controllerAs: 'searchCtrl'
    })
  })();