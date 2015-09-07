import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
  	createMessage: function() {
  		var title = this.get('title');
      var messageContent = this.get('messageContent');
      var interval = this.get('interval');
      var newMessage = this.store.createRecord('message', {
        title: title,
        messageContent: messageContent,
        interval: interval,
        active: true
      });
      this.set('title','');
      this.set('messageContent','');
      this.set('interval','');
      newMessage.save();
      this.transitionToRoute('messages.index');
  	}
  }
});
