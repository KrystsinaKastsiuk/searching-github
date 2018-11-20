(function(){
  'use strict';
  
  angular
    .module('searchingGithub')
    .component('searchPage', {
      templateUrl: 'src/app/search/search.html',
      controller: 'searchData',
      controllerAs: 'getData'
    })
  })();