(function(){
  'use strict';
  
  angular
    .module('searchingGithub')
    .factory('dataService', ['$http', 'constantAPI', function($http, constantAPI) {
      let service = {};

      service.findData = (value, request) => {
        // console.log("url", constantAPI.getUrlAPI + '/' + constantAPI[value].path + request + constantAPI[value].param);
        return $http({
          method:'GET', 
          url: constantAPI.getUrlAPI + '/' + constantAPI[value].path + request + constantAPI[value].param
        }).then((response) => response.data, (response) => response.status);
      };

      return service;
    }])
  })();