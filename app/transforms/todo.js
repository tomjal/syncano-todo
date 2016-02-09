import DS from 'ember-data';

App.ObjectTransform = DS.Transform.extend({
  deserialize: function(value) {
    debugger
    if (!$.isPlainObject(value)) {
      return {};
    } else {
      return value;
    }
  },
  serialize: function(value) {
    debugger
    if (!$.isPlainObject(value)) {
      return {};
    } else {
      return value;
    }
  }
});

/*
  DS.attr('array')
*/
App.ArrayTransform = DS.Transform.extend({
  deserialize: function(value) {
    if (Ember.isArray(value)) {
      return Em.A(value);
    } else {
      return Em.A();
    }
  },
  serialize: function(value) {
    if (Ember.isArray(value)) {
      return Em.A(value);
    } else {
      return Em.A();
    }
  }
});
