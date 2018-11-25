(function(){
  'use strict';
  
  angular
    .module('searchingGithub')
    .controller('defineMenuItem', defineMenuItem);
        
    function defineMenuItem() {
      const ctrl = this;

      ctrl.usersTotal = 0;
      ctrl.repositoriesTotal = 0;
      ctrl.issuesTotal = 0;
      ctrl.codesTotal= 0;

      ctrl.menus = [
        {item: users, ammout: usersTotal},
        {item: repositories, ammout: repositoriesTotal},
        {item: issues, ammout: issuesTotal},
        {item: code, ammout: codesTotal}
      ];
    }
})();