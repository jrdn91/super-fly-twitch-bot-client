import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('bad_url', { path: '/*badurl' });
  this.route('commands', function() {
    this.route('new');
  });
  this.route('messages',function(){
  	this.route('new');
  });
  this.route('followers', function() {
    this.route('new');
    this.route('edit', { path: 'edit/:follower_id'});
  });
});

export default Router;
