(function(){
  'use strict';
  
  angular
    .module('searchingGithub')
    .constant('constantAPI', {
      getUrlAPI: 'https://api.github.com/search/repositories?q=topic:'
    })
})();