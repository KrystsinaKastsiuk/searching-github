﻿(function(){
  'use strict';
  
  angular
    .module('gitHubSearch')
    .component('menu', {  
      templateUrl: 'src/app/menu/menu.html',
      controller: 'ShowResults',
      controllerAs: 'resultsCtrl'
    })
  })();