import Ember from 'ember';

export default Ember.Route.extend({
	model() {
  	return this.store.findAll('follower');
  },
  actions: {
		deleteFollower: function(follower) {
			this.store.findRecord('follower', follower.id).then(function(res) {
			  res.destroyRecord();
			});
		}
	}
});
