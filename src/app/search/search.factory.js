(function(){
  'use strict';
  
  angular
    .module('gitHubSearch')
    .factory('dataService', dataService);
    
    dataService.$inject = ['$http', 'API'];

    function dataService($http, API) {
      const service = {};

      service.findData = (value, request) => {
        return $http({
          method:'GET', 
          url: API.url + API[value].path + request + API[value].param
        }).then((response) => response.data, (response) => response.status);
      };

      service.findUserDetails = (listRepos) => {
        console.log("serviceVal", listRepos);
        return $http({
          method:'GET', 
          // url: listRepos
          url: 'https://api.github.com/users/Tyriar/repos'
        }).then((response) => response.data, (response) => response.status);
      };

      service.findRepositoryDetails = (userName, nameRepo) => {
        return $http({
          method:'GET', 
          // url: API.url + '/repos' + userName + '/' + nameRepo + '/' + 'forks'
          url: 'https://api.github.com/repos/iliakan/webpack-screencast/forks'
        }).then((response) => response.data, (response) => response.status);
      };

      return service;
    }
  })();