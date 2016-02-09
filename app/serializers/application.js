import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizePayload(payload) {
    var Syncano_Class = payload.objects[0].links.self.split('/')[5];
    return {[Syncano_Class]: Em.A(payload.objects)};
  }
});
