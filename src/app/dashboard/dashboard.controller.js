'use strict';
angular
  .module('EL_DashboardMD')
  .controller('EL_DashboardCT', ['$scope', function ($scope) {

    $scope.refreshDashboard  = refreshDashboard;

    _initialize();

    /** Scope Methods **/

    function refreshDashboard(){
      // Do Login Here
    }

    /** Scope Methods Ends **/


    /** Private Methods **/

    function _initialize(){
      // Initialization Code goes Here
      _getUpcomingEvents();
      _getFeeds();
    }
    function _getUpcomingEvents(){
      // Fetch Upcoming Events Here
    }

    function _getFeeds(){
      // Fetch Feeds Here
    }

    /** Private Methods  Ends **/


  }]);
