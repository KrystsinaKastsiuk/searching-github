(function(){
  'use strict';
  angular
  .module('gitHubSearch')
  .controller('UserCtrl', UserCtrl);

  UserCtrl.$inject = ['$state', '$stateParams', 'dataService'];

  function UserCtrl($state, $stateParams, dataService) {
    const usersCtrl = this;    

    usersCtrl.request = $stateParams.request;    
    dataService.findData('users', usersCtrl.request).then( response => {
      usersCtrl.users = response.items;
    });

    usersCtrl.sendUserDetails = function(name, repos) {
      usersCtrl.name = name;      
      usersCtrl.repos = repos;
      $state.go("search.results.userDetails", {name: usersCtrl.name});
    }
  }
})();