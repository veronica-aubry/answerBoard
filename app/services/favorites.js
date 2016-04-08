import Ember from 'ember';

export default Ember.Service.extend({
  answers: [],

  add(answer) {
    this.get('answers').pushObject(answer);
  }
});
