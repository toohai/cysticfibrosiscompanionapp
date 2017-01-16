angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('cysticFibrosis', {
    url: '/start',
    templateUrl: 'templates/cysticFibrosis.html',
    controller: 'cysticFibrosisCtrl'
  })

  .state('menu', {
    url: '/menu',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('cysticFibrosisGuide', {
    url: '/guide',
    templateUrl: 'templates/cysticFibrosisGuide.html',
    controller: 'cysticFibrosisGuideCtrl'
  })

  .state('cysticFibrosisGuideDetails', {
    url: '/guide-details',
	params: {
		guide_id: "1"		
},
    templateUrl: 'templates/cysticFibrosisGuideDetails.html',
    controller: 'cysticFibrosisGuideDetailsCtrl'
  })

  .state('medicineSchedule', {
    url: '/medicine',
    templateUrl: 'templates/medicineSchedule.html',
    controller: 'medicineScheduleCtrl'
  })

  .state('doctorAppointments', {
    url: '/appointments',
    templateUrl: 'templates/doctorAppointments.html',
    controller: 'doctorAppointmentsCtrl'
  })

  .state('healthTracker', {
    url: '/tracker',
    templateUrl: 'templates/healthTracker.html',
    controller: 'healthTrackerCtrl'
  })

$urlRouterProvider.otherwise('/start')

  

});