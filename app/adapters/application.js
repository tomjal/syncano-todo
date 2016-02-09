import DS from 'ember-data';
import Ember from 'ember';

export default DS.RESTAdapter.extend({
  host: 'https://api.syncano.io',
  namespace: 'v1/instances/billowing-snowflake-7678/classes',
  headers: {'X-API-KEY': '7cc94b9ca9087e544697560c68dd75f5620f5f03'},
  // findAll(store, type, id) {
  //   var Syncano_Class = type.toString().split(':')[1];
  //   var url = this.get('host') + '/'+ this.get('namespace') + '/' + Syncano_Class + '/objects/';
  //   return Ember.$.get(url, {headers: {'X-API-KEY': '7cc94b9ca9087e544697560c68dd75f5620f5f03'}});
  // }
  buildURL(modelName, id, snapshot, requestType, query) {
    var url = this._super(modelName, id, snapshot, requestType, query);
    return url.slice(0, -1) + '/objects/';
  }
});
