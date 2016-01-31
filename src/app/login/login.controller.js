'use strict';
angular.module('EL_LoginMD')
.controller('EL_LoginCT', ['$scope', function ($scope) {

    $scope.doLogin  = doLogin;

    _initialize();

    /** Scope Methods **/

    function doLogin(){
      // Do Login Here
    }

    /** Scope Methods Ends **/


    /** Private Methods **/

    function _initialize(){
      // Initialization Code goes Here
      _checkRememberMe();
    }

    function _checkRememberMe(){
      // Do Remember me Checks Here
    }

    /** Private Methods  Ends **/


  }]);
