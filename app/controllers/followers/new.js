import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
  	createFollower: function() {
  		var username = this.get('username');
      var newFollower = this.store.createRecord('follower', {
        username: username,
        minutes: 0,
        currency: 0
      });
      this.set('username','');
      newFollower.save();
      this.transitionToRoute('followers.index');
  	}
  }
});
