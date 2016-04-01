import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },
    save(){
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        text: this.get('text'),
      };
      this.set('addnewQuestion', false);
      this.sendAction('save', params);
    }
  }
});
