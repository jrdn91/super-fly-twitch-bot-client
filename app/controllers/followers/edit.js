import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
  	editFollower: function() {
  		var self = this;
      var follower = self.get('model');
      follower.save().then(function(){
      	self.get('notify').success('Follower edited');
        self.transitionToRoute('followers.index');
      }).catch(function(){
      	alert('there was a problem');
      });
  	}
  }
});
