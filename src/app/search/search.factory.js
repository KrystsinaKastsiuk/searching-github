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

      service.findUserDetails = (userName) => {
        return $http({
          method:'GET', 
          url: API.url + '/users/' + userName + '/repos'
        }).then((response) => response.data, (response) => response.status);
      };

      service.findRepositoryDetails = (userName, nameRepo) => {
        console.log(userName, nameRepo);
        return $http({
          method:'GET', 
          url: API.url + '/repos/' + userName + '/' + nameRepo + '/' + 'forks'
        }).then((response) => response.data, (response) => response.status);
      };

      return service;
    }
  })();