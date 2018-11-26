(function(){
  'use strict';
  
  angular
    .module('gitHubSearch')
    .component('usersList', {
      templateUrl: 'src/app/results/common/users/users.html',
      controller: 'UserCtrl',
      controllerAs: 'usersCtrl'
    })
  })();