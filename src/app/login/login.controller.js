'use strict';
angular.module('EL_LoginMD')
.controller('EL_LoginCT', ['$scope', function ($scope) {

    $scope.doLogin  = doLogin;

    _initialize();

    /** Scope Methods Implementation **/

    function doLogin(){
      // Do Login Here
    }

    /** Scope Methods Implementation Ends **/


    /** Private Methods Implementation **/

    function _initialize(){
      // Initialization Code goes Here
      _checkRememberMe();
    }

    function _checkRememberMe(){
      // Do Remember me Checks Here
    }

    /** Private Methods Implementation Ends **/


  }]);
