import Ember from 'ember';

export default Ember.Controller.extend({
	isConnected: null,
  actions: {
    startBot: function(){
      var self = this;
      var l = Ladda.create( document.querySelector( '.start-bot-button' ) );
      l.start();
      Ember.$.ajax({
        method: 'post',
        dataType: 'json',
        url: 'http://localhost:3000/api/v1/bot',
        success: function() {
          l.stop();
          self.toggleProperty('isConnected');
          self.get('notify').success('Bot started');
        },
        error: function(err) {
          l.stop();
          console.log(err);
          self.get('notify').error('There was a problem');
        }
      });
    },
    stopBot: function(){
      var self = this;
      var l = Ladda.create( document.querySelector( '.stop-bot-button' ) );
      l.start();
      Ember.$.ajax({
        method: 'delete',
        dataType: 'json',
        url: 'http://localhost:3000/api/v1/bot',
        success: function() {
          l.stop();
          self.toggleProperty('isConnected');
          self.get('notify').success('Bot stopped');
        },
        error: function(err) {
          l.stop();
          console.log(err);
          self.get('notify').error('There was a problem');
        }
      });
    },
    showModal: function(name, model) {
      this.render(name, {
        into: 'application',
        outlet: 'modal',
        model: model
      });
    },
    removeModal: function() {
      this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'application'
      });
    }
  }
});
