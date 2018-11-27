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
          config.headers['Authorization'] = 'Basic bc2901c93af49b85529e4b8e77aa5644e87c9661=';
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