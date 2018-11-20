(function(){
	'use strict';
	
		class searchData {
			constructor(constantAPI, dataService, $scope) {
        dataService.getUsers('javascript').then( response => { 
          $scope.users = response.items; 
          return $scope.users; 
        });

        dataService.getCode('something').then( response => { 
          $scope.codes = response.items; 
          return $scope.codes; 
        });

        dataService.getIssues('something').then( response => { 
          $scope.issues = response.items; 
          return $scope.issues; 
        });

        dataService.getRepositories('something').then( response => { 
          $scope.repositories = response.items; 
          return $scope.repositories; 
        });

      }

      sentRequest(){
        console.log('Request was returned');
      }
    }

    searchData.$inject = ['constantAPI', 'dataService', '$scope'];

    angular
      .module('searchingGithub')
      .controller('searchData', searchData);
    
	})();