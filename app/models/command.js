import DS from 'ember-data';

export default DS.Model.extend({
  trigger: DS.attr('string'),
  response: DS.attr('string'),
  permission: DS.attr('string')
});
