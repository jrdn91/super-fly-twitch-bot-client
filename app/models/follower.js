import DS from 'ember-data';
import momentFormat from 'ember-moment/computeds/format';
const attr = DS.attr;

export default DS.Model.extend({
  username: attr('string'),
  minutes: attr('number'),
  currency: attr('number'),
  created_at: attr('date'),
  created_at_nice: momentFormat('created_at', 'MMMM DD, YYYY'),
  updated_at: attr('date'),
  updated_at_nice: momentFormat('updated_at', 'MMMM DD, YYYY'),
});
