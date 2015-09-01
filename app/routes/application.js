import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    startBot: function(){
      var self = this;
      console.log('starting bot');
      Ember.$.ajax({
        method: 'post',
        dataType: 'json',
        url: 'http://localhost:3000/api/v1/bot',
        success: function(data) {
          console.log(data);
          self.get('notify').success('Bot started');
        },
        error: function(err) {
          console.log(err);
        }
      });
    },
    stopBot: function(){
      var self = this;
      console.log('stoping bot');
      Ember.$.ajax({
        method: 'delete',
        dataType: 'json',
        url: 'http://localhost:3000/api/v1/bot',
        success: function(data) {
          console.log(data);
          self.get('notify').success('Bot stopped');
        },
        error: function(err) {
          console.log(err);
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
