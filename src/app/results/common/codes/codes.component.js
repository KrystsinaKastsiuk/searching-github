(function(){
  'use strict';
  
  angular
    .module('gitHubSearch')
    .component('codesList', {
      templateUrl: 'app/results/common/codes/codes.html',
      controller: 'CodeCtrl',
      controllerAs: 'codeCtrl'
    })
  })();