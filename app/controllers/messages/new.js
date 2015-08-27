import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
  	createMessage: function() {
  		var title = this.get('title');
      var message = this.get('message');
      var interval = this.get('interval');
      var message = this.store.createRecord('message', {
        title: title,
        message: message,
        interval: interval,
        active: true
      });
      this.set('title','');
      this.set('message','');
      this.set('interval','');
      message.save();
      this.transitionToRoute('messages.index');
  	}
  }
});
