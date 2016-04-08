import Ember from 'ember';

export default Ember.Service.extend({
  answers: [],

  add(answer) {
    console.log(this.get('answers'));
    this.get('answers').pushObject(answer);
  }
});
