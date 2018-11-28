(function(){
  'use strict';
  
  angular
    .module('gitHubSearch')
    .component('userDetails', {
      templateUrl: 'app/results/details/users/userDetails.html',
      controller: 'UserDetailsCtrl',
      controllerAs: 'userDetailsCtrl'
    })
  })();