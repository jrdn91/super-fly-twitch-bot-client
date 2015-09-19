import Ember from 'ember';

export default Ember.Route.extend({
	model() {
  	return this.store.findAll('user');
  },
  actions: {
		deleteMessage: function(user) {
			this.store.findRecord('user', user.username).then(function(res) {
			  res.destroyRecord();
			});
		}
	}
});
