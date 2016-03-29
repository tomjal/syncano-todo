import Ember from 'ember';


export default Ember.Route.extend({
  syncano: Ember.inject.service(),

  model() {
    return this.store.findAll('todo');
  },
  setupController(controller, model) {
    controller.set('todoItems', model);
  }
});
