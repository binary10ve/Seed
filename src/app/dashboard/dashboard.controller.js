'use strict';
angular
  .module('EL_DashboardMD')
  .controller('EL_DashboardCT', ['$scope', function ($scope) {

    $scope.refreshDashboard  = refreshDashboard;

    _initialize();

    /** Scope Methods Implementation **/

    function refreshDashboard(){
      // Do Login Here
    }

    /** Scope Methods Implementation Ends **/


    /** Private Methods Implementation **/

    function _initialize(){
      // Initialization Code goes Here
      _getUpcomingEvents();
    }
    function _getUpcomingEvents(){
      // Fetch Upcoming Events Here
    }

    function _getFeeds(){
      // Fetch Feeds Here
    }

    /** Private Methods Implementation Ends **/


  }]);
