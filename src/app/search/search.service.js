(function(){
  'use strict';
  angular
  .module('searchingGithub')
  .service('transferData', transferData);

  function transferData() {
    this.request = {};

    return {
      setRequest: function (value) {
        this.request = value;
      },
      getRequest: function () {
        return this.request;
      }
    };
  }
})();