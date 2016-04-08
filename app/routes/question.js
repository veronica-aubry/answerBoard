import Ember from 'ember';

export default Ember.Route.extend({

  model(params){
    return Ember.RSVP.hash({
      question: this.store.findRecord('question', params.question_id),
        });
  },

  actions: {
  update(question, params) {
   console.log(question);
   Object.keys(params).forEach(function(key) {
     if(params[key]!==undefined) {
       question.set(key,params[key]);
     }
   });
   question.save();
   this.transitionTo('index');
 },
 destroyQuestion(question) {
   question.destroyRecord();
   this.transitionTo('index');
 },
 saveAnswer(params) {
   var newAnswer = this.store.createRecord('answer', params)
   var question = params.question;
   question.get('answers').addObject(newAnswer)
   newAnswer.save().then(function(){
     return question.save();
   });
 },
 updateRating(params) {
   const { item: answer, rating } = params;
   answer.set('rating', rating);
   return answer.save();
  }
 }
});
