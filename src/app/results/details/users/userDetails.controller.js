(function(){
  'use strict';
  angular
  .module('gitHubSearch')
  .controller('UserDetailsCtrl', UserDetailsCtrl);

  UserDetailsCtrl.$inject = ['$state', '$stateParams', 'dataService'];

  function UserDetailsCtrl($state, $stateParams, dataService) {
    const userDetailsCtrl = this;   
    
    userDetailsCtrl.request = $stateParams.request;
    userDetailsCtrl.name = $stateParams.name;

    dataService.findUserDetails(userDetailsCtrl.name).then( response => {
      userDetailsCtrl.userDetails = response;
      userDetailsCtrl.owner = response[0].owner.login;
      userDetailsCtrl.avatar = response[0].owner.avatar_url;
    });

    userDetailsCtrl.backUsersPage = function() {
      $state.go("search.results.users", {request: userDetailsCtrl.request});;
    }
  }
})();