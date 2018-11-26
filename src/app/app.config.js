(function(){
  'use strict';
  
  angular
    .module('gitHubSearch', ['ui.router'])
    .config(['$locationProvider', '$stateProvider', '$urlRouterProvider', function($locationProvider, $stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('search', {
          url: '/',
          template: '<search-page></search-page><ui-view style="display: flex"></ui-view>'
        })
        .state('search.results', {
          url: 'search/{request}',
          template: '<menu></menu><results-page></results-page><ui-view></ui-view>'
        })
        .state('search.results.users', {
          url: '/users',
          params: {
            request: null
          },
          template: '<users-list></users-list>'
        })
        .state('search.results.repositories', {
          url: '/repositories',
          params: {
            request: null
          },
          template: '<repositories-list></repositories-list>'
        })
        .state('search.results.issues', {
          url: '/issues',
          params: {
            request: null
          },
          template: '<issues-list></issues-list>'
        })
        .state('search.results.codes', {
          url: '/codes',
          params: {
            request: null
          },
          template: '<codes-list></codes-list>'
        })
      $urlRouterProvider.otherwise("/");
      $locationProvider.html5Mode(true);
    }]);
})();