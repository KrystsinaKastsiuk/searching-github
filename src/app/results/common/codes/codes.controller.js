(function(){
  'use strict';
  angular
  .module('gitHubSearch')
  .controller('CodeCtrl', CodeCtrl);

  CodeCtrl.$inject = ['$stateParams', 'dataService'];

  function CodeCtrl($stateParams, dataService) {
    const codeCtrl = this;    

    codeCtrl.request =  $stateParams.request;
    
    dataService.findData('codes', codeCtrl.request).then( response => {
      codeCtrl.codes = response.items;
    });
  }
})();