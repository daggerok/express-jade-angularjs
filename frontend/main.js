require('../node_modules/angular/angular-csp.css');
require('./styles.css');
require('../node_modules/jquery/dist/jquery.js');
require('../node_modules/angular/angular.js');

angular.module('express-jade-angularjs', []);
angular.module('express-jade-angularjs')
  .controller('mainCtrl', ['$scope', $scope => {
    $scope.message = `${Date.now()}: Hola!`
  }]);
