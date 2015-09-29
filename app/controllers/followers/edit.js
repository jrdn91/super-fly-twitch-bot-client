import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
  	editFollower: function(defer) {
  		var self = this;
      var follower = self.get('model');
      follower.save().then(function(){
      	defer.resolve();
      }).catch(function(){
      	defer.reject();
      });
  	},
    afterEditFollower: function() {
      this.get('notify').success('Follower edited');
    }
  }
});
