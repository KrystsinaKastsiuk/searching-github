(function(){
  'use strict';
  
  angular
    .module('gitHubSearch')
    .constant('API', {
      url: 'https://api.github.com/search',

      users: { path: 'users?q=', param: ''},
      repositories: { path: 'repositories?q=', param: ''},
      issues: { path: 'issues?q=', param: ''},
      codes: { path: 'code?q=', param: '+repo:jquery%2Fjquery'} //param обязательный параметр
    })
})();