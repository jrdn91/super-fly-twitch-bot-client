import Ember from "ember";

export default Ember.Route.extend({
  model() {
  	return this.store.findAll('message');
  },
  actions: {
		deleteMessage: function(message) {
			this.store.findRecord('message', message.id).then(function(res) {
			  res.destroyRecord();
			});
		}
	}
});
