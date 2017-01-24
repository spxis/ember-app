import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('hello');
  this.route('test');
  this.route('contact');
  this.route('about');
  this.route('photos');
  this.route('favorites', {path: '/favs'});
  this.route('photo', { path: '/photos/:photo_id' });
  this.route('favourite-quote');
  this.route('not-found', {path: '/*bad'});
});

export default Router;
