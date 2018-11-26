(function(){
  'use strict';
  
  angular
    .module('gitHubSearch')
    .component('searchPage', {
      templateUrl: 'src/app/search/search.html',
      controller: 'SearchData',
      controllerAs: 'searchCtrl'
    })
  })();