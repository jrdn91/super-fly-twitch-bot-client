import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('commands', function() {
  });

  this.route('bad_url', { path: '/*badurl' });
});

export default Router;
