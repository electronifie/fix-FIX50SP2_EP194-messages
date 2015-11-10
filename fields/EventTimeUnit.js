var invert = require('invert-obj');

function EventTimeUnit (eventTimeUnit) {
  this.message = eventTimeUnit;
}

EventTimeUnit.prototype.value = function () {
  return this.message;
};


EventTimeUnit.Keys = {
  'HOUR': 'H',
  'MINUTE': 'Min',
  'SECOND': 'S',
  'DAY': 'D',
  'WEEK': 'Wk',
  'MONTH': 'Mo',
  'YEAR': 'Yr',
};

EventTimeUnit.Tag = '1827';

EventTimeUnit.Type = 'STRING';

EventTimeUnit.Values = invert(EventTimeUnit.Keys);

module.exports = EventTimeUnit;