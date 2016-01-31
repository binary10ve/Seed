'use strict';
angular.module('EventLootMD')
  .provider('EL_CoreHTTPSV', [ function(){


    var _that =  this;
    var HTTP;


    function HM_Http(){
      this.get = function(url, params){
        return HTTP.get(_that.apiEndPoint + url,{params : params});
      };
      this.put = function(url,config){
        return HTTP.put(_that.apiEndPoint + url, config);
      };
      this.post = function(url, config){
        return HTTP.post(_that.apiEndPoint + url, config);
      };
      this.delete = function(url,config){
        return HTTP.delete(_that.apiEndPoint + url,config);
      };
    }

    this.setProperties = function(prop, value){
      // Do Some Configuration here
    };


    this.$get = ['$http','EL_GlobalCST','EL_EnvCST',function($http, GlobalCnst, EnvCnst){
      this.env =  EnvCnst.current;
      HTTP = $http;
      this.apiEndPoint = EnvCnst[GlobalCnst.CURRENT_ENV].apiEndPoint
      return new HM_Http()
    }];
  }]);
