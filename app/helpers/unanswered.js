import Ember from 'ember';

export function unanswered(params) {
  var question = params[0];

  if(question.get('answers').get('length') < 2) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-search"></span>');
  }
}

export default Ember.Helper.helper(unanswered);
