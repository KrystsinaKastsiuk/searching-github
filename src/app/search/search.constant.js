(function(){
  'use strict';
  
  angular
    .module('gitHubSearch')
    .constant('API', {
      url: 'https://api.github.com',

      users: { path: '/search/users?q=', param: ''},
      repositories: { path: '/search/repositories?q=', param: ''},
      issues: { path: '/search/issues?q=', param: ''},
      codes: { path: '/search/code?q=', param: '+repo:jquery%2Fjquery'} //param обязательный параметр
    })
})();