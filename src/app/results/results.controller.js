(function(){
  'use strict';
  angular
  .module('searchingGithub')
  .controller('showResults', showResults);

  showResults.$inject = ['dataService', '$scope', 'transferData'];

  function showResults(dataService, $scope, transferData) {
    const ctrl = this;

    //********** Возможно это пригодится ************/
    // $scope.$on('eventName', function (event, args) {
    //   console.log(args);
    //   $scope.request = args;
    // });

    this.getResponse = function() {
      ctrl.request = transferData.getRequest(); //значение передаётся, сервис работает

      dataService.findData('users', ctrl.request).then( response => {
        $scope.users = response.items;
        console.log('users', $scope.users)
        return $scope.users;  
      });
    };
  }
})();