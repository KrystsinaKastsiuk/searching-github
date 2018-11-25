(function(){
  'use strict';
  
  angular
    .module('searchingGithub')
    .component('listMenuItems', {  
      templateUrl: 'src/app/results/menu/menu.html',
      controller: 'defineMenuItem',
      controllerAs: 'ctrl'
    })
  })();