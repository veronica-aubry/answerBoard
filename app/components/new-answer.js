import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },
    saveAnswer(){
      var params = {
        author: this.get('author'),
        body: this.get('body'),
        question: this.get('question'),
        rating: 0
      };
      this.set('addnewAnswer', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
