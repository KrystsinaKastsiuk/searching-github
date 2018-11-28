(function () {
  'use strict';

  angular.module('gitHubSearch')
    .config(['$locationProvider', '$httpProvider',
      function config($locationProvider, $httpProvider) {
        $locationProvider.html5Mode(true);
      }
    ])
    .factory('interceptor', function () {
      return {
        request: function (config) {
          config.headers['Authorization'] = 'Basic 47d192ead93feb1a0c31b12fb2a3b696020f634f=';
          config.headers['Accept'] = 'application/json;odata=verbose';
          return config;
        }
      };
    })
    .config(function ($httpProvider) {
      $httpProvider.defaults.cache = true;
      $httpProvider.interceptors.push('interceptor');
    });
})();