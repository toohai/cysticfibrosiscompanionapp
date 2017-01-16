angular.module('app.controllers', [])
  
.controller('cysticFibrosisCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('cysticFibrosisGuideCtrl', ['$scope', '$stateParams', '$firebaseArray', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $firebaseArray) {
  var ref = firebase.database().ref().child("topics");
  // download the data into a local object
  $scope.topics = $firebaseArray(ref);
}])
   
.controller('cysticFibrosisGuideDetailsCtrl', ['$scope', '$stateParams', '$firebaseArray', '$filter', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $firebaseArray, $filter) {
  var ref = firebase.database().ref().child("guides")
  // download the data into a local object
  $scope.guides = $firebaseArray(ref);
}
])
   
.controller('medicineScheduleCtrl', ['$scope', '$stateParams', '$firebaseArray', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName

function ($scope, $stateParams, $firebaseArray) {
  var ref = firebase.database().ref().child("medicine");
  // download the data into a local object
  $scope.medicine = $firebaseArray(ref);
}])
   
.controller('doctorAppointmentsCtrl', ['$scope', '$stateParams', '$firebaseArray', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName

function ($scope, $stateParams, $firebaseArray) {
  var ref = firebase.database().ref().child("doctors");
  // download the data into a local object
  $scope.doctors = $firebaseArray(ref);
}

])
   
.controller('healthTrackerCtrl', ['$scope', '$stateParams', '$firebaseArray', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $firebaseArray) {
  var ref = firebase.database().ref().child("health_tracker");
  // download the data into a local object
  $scope.health_tracker = $firebaseArray(ref);
}])
 