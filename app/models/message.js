import DS from 'ember-data';
const attr = DS.attr;

export default DS.Model.extend({
  title: attr('string'),
  messageContent: attr('string'),
  interval: attr('number'),
  active: attr('boolean')
});