(function(){
  'use strict';
  angular
  .module('gitHubSearch')
  .controller('UserCtrl', UserCtrl);

  UserCtrl.$inject = ['$stateParams', 'dataService'];

  function UserCtrl( $stateParams, dataService) {
    const usersCtrl = this;    

    usersCtrl.request = $stateParams.request;

    dataService.findData('users', usersCtrl.request).then( response => {
      usersCtrl.users = response.items;
    });
  }
})();