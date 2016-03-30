import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveNewItem() {
      this.store.createRecord('todo', {'title': this.get('newItem'), 'is_completed': false}).save();
      this.set('newItem', null);
    },
    toggleComplete(item) {
      item.toggleProperty('is_completed');
      item.save();
    },
    itemDelete(item) {
      item.destroyRecord();
    }
  }
});
