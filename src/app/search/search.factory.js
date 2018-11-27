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
          url: API.url + '/' + API[value].path + request + API[value].param
        }).then((response) => response.data, (response) => response.status);
      };

      return service;
    }
  })();