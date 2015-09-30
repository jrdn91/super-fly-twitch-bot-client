import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
  	editCommand: function() {
  		var self = this;
      var command = self.get('model');
      command.save().then(function(){
      	self.get('notify').success('Command edited');
        self.transitionToRoute('commands.index');
      }).catch(function(){
      	alert('there was a problem');
      });
  	}
  }
});
