import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
  	createUser: function() {
  		var username = this.get('username');
      var newUser = this.store.createRecord('user', {
        username: username,
        minutes: 0,
        currency: 0
      });
      this.set('username','');
      newUser.save();
      this.transitionToRoute('users.index');
  	}
  }
});
