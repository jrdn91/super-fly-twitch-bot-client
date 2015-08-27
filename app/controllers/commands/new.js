import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
  	createCommand: function() {
  		var commandTrigger = this.get('commandTrigger');
      var commandResponse = this.get('commandResponse');
      var commandPermission = this.get('commandPermission');
      var command = this.store.createRecord('command', {
        commandTrigger: commandTrigger,
        commandResponse: commandResponse,
        commandPermission: commandPermission
      });
      this.set('commandTrigger','');
      this.set('commandResponse','');
      this.set('commandPermission','');
      command.save();
      this.transitionToRoute('commands.index');
  	}
  }
});
