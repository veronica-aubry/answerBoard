import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    updateRating(params) {
      this.sendAction('updateRating', params)
    },
  }
});
