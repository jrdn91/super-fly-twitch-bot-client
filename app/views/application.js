import Ember from 'ember';

export default Ember.View.extend({
	willInsertElement: function() {
    Ember.run.scheduleOnce('afterRender', this, 'checkBotConnectionStatus');
  },

  checkBotConnectionStatus: function() {
  	var self = this;
    Ember.$.ajax({
      method: 'get',
      dataType: 'json',
      url: 'http://localhost:3000/api/v1/bot',
      success: function(data) {
        console.log(data);
        if(data.connected){
        	self.set('controller.isConnected', true);
        }
      },
      error: function(err) {
        console.log(err);
        self.get('notify').error('There was a problem');
      }
    });
  }
});
