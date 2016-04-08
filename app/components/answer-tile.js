import Ember from 'ember';

export default Ember.Component.extend({
  favorites: Ember.inject.service(),

  actions: {
    updateRating(params) {
      this.sendAction('updateRating', params)
    },
    addToFavorites(answer){
      this.get('favorites').add(answer);
    },
  }
});
