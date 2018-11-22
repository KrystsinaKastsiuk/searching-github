(function(){
  'use strict';
  
  angular
    .module('searchingGithub', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('search', {
          url: '/',
          template: '<search-page></search-page><ui-view></ui-view>'
        })
        .state('search.results', {
          url: 'search',
          template: '<search-results-page></search-results-page>'
        })
        // .state('search.results.users', {
        //   url: '/{request}/users',
        //   template: '<user-list></user-list>'
        // })
        // .state('search.results.repositories', {
        //   url: '/{request}/repositories',
        //   template: '<repository-list></repository-list>'
        // })
        // .state('search.results.issues', {
        //   url: '/{request}/issues',
        //   template: '<issue-list></issue-list>'
        // })
        // .state('search.results.codes', {
        //   url: '/{request}/code',
        //   template: '<code-list></code-list>'
        // })
        // .state('search.NotFound', {
        //   url: 'NotFound',
        //   template: '<p>Not Found</p>'
        // });
      $urlRouterProvider.otherwise("/");
    }]);
})();