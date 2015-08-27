import DS from 'ember-data';

export default DS.Model.extend({
  commandTrigger: DS.attr('String'),
  commandResponse: DS.attr('String'),
  commandPermission: DS.attr('String')
});
