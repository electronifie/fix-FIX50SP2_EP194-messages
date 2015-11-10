var invert = require('invert-obj');

function TimeUnit (timeUnit) {
  this.message = timeUnit;
}

TimeUnit.prototype.value = function () {
  return this.message;
};


TimeUnit.Keys = {
  'HOUR': 'H',
  'MINUTE': 'Min',
  'SECOND': 'S',
  'DAY': 'D',
  'WEEK': 'Wk',
  'MONTH': 'Mo',
  'YEAR': 'Yr',
  'QUARTER': 'Q',
};

TimeUnit.Tag = '997';

TimeUnit.Type = 'STRING';

TimeUnit.Values = invert(TimeUnit.Keys);

module.exports = TimeUnit;