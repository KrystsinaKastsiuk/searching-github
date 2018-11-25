(function(){
  'use strict';
  
  angular
    .module('searchingGithub')
    .constant('constantAPI', {
      getUrlAPI: 'https://api.github.com/search',

      users: { path: 'users?q=', param: '+location:Russia'},
      repositories: { path: 'repositories?q=', param: '+has_issues:true'},
      issues: { path: 'issues?q=', param: '+confused:0'},
      codes: { path: 'code?q=', param: '+repo:jquery%2Fjquery'} //param обязательный параметр
    })
})();