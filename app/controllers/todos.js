import Ember from 'ember';

export default Ember.Controller.extend({
  syncano: Ember.inject.service('syncano'),
  actions: {
    saveNewItem() {
      this.store.createRecord('todo', {'title': this.get('newItem'), 'is_completed': false}).save();
      this.set('newItem', null);
    },
    toggleComplete(item) {
      item.set('is_completed', !item.get('is_completed'));
      item.save();
    },
    itemDelete(item) {
      item.destroyRecord();
    }
  }
});
