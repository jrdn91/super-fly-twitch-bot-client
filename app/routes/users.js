import Ember from 'ember';

export default Ember.Route.extend({
	model() {
  	return this.store.findAll('user');
  },
  actions: {
		deleteUser: function(user) {
			this.store.findRecord('user', user.id).then(function(res) {
			  res.destroyRecord();
			});
		}
	}
});
