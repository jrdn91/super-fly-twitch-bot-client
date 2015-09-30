import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
  	editMessage: function() {
  		var self = this;
      var message = self.get('model');
      message.save().then(function(){
      	self.get('notify').success('Message edited');
        self.transitionToRoute('messages.index');
      }).catch(function(){
      	alert('there was a problem');
      });
  	}
  }
});
