require('../node_modules/jquery/dist/jquery.js');
import '../node_modules/popper.js/dist/esm/popper';
import '../node_modules/bootstrap/dist/js/bootstrap';
import '../node_modules/angular/angular-csp.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './styles.css';
import 'babel-polyfill';
import 'angular/angular-csp.css';
import './styles.css';
import angular from 'angular';
import applicationModule from './app';

angular.bootstrap(document, [applicationModule.name], {
  strictDi: true, // data-ng-strict-di=""
  cloak: true,    // data-ng-cloak=""
});
