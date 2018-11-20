(function(){
  'use strict';
  
  angular
    .module('searchingGithub')
    .factory('dataService', ['$http', 'constantAPI', function($http, constantAPI) {
      let service = {};
      
      service.getUsers = function(param) {
        return $http( {method: 'GET', url: constantAPI.getUrlAPI + param} )
          .then((response) => { return response.data}, (response) => { return response.status });
      };

      service.getCode = function(param) {
        return $http( {method: 'GET', url: constantAPI.getUrlAPI + param} )
          .then((response) => { return response.data}, (response) => { return response.status });
      };
    
      service.getIssues = function(param) {
        return $http( {method: 'GET', url: constantAPI.getUrlAPI + param} )
          .then((response) => { return response.data}, (response) => { return response.status });
      };

      service.getRepositories = function(param) {
        return $http( {method: 'GET', url: constantAPI.getUrlAPI + param} )
          .then((response) => { return response.data}, (response) => { return response.status });
      };

      return service;
    }])
  })();