(function(){
  'use strict';
  
  angular
    .module('gitHubSearch')
    .component('codesList', {
      templateUrl: 'src/app/results/common/codes/codes.html',
      controller: 'CodeCtrl',
      controllerAs: 'codeCtrl'
    })
  })();