'use strict';
angular.module('EventLootMD')
  .constant('EL_EnvCST',{
    dev : {
      apiEndPoint : 'http://devapi.eventloot.com'
    },
    staging: {
      apiEndPoint : 'http://stagingapi.eventloot.com'
    },
    production :{
      apiEndPoint : 'http://prodapi.eventloot.com'
    }
  });
