angular.module('EventLootMD')
.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
      abstract : true,
      views :{
        'header@app': {
          templateUrl : 'app/components/header/header.html'
        },
        'footer@app':{
          templateUrl : 'app/components/footer/footer.html'
        },
        '' : {
          templateUrl: 'app/components/main/main.html'
        }
      }
    })
    .state('app.dashboard', {
      url: '/dashboard',
      templateUrl: 'app/dashboard/dashboard.html',
      controller: 'EL_DashboardCT'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'app/login/login.html',
      controller: 'EL_LoginCT'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: 'app/signup/signup.html',
      controller: 'EL_SignUpCT'
    });

  $urlRouterProvider.otherwise('/dashboard');
});
