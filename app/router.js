import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('hello');
  this.route('test');
  this.route('about');
  this.route('favorites', {path: '/favs'});
});

export default Router;
