import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.findAll('command');
	},
	actions: {
		deleteCommand: function(command) {
			this.store.findRecord('command', command.id).then(function(res) {
			  res.destroyRecord();
			});
		}
	}
});
