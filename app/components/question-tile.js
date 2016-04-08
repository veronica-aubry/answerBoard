import Ember from 'ember';

export default Ember.Component.extend({
  answerLength: Ember.computed('question.answers', function() {
    var length = this.get('question.answers').get('length');
    if (length === 1) {
      return length + ' answer';
    } else if (length === 0) {
      return "no answers yet!"
    }
    else {
      return length + ' answers';
    }
  })
})
