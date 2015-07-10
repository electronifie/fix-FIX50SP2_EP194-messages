var invert = require('invert-obj');

function UnderlyingEventTimePeriod (underlyingEventTimePeriod) {
  this.message = underlyingEventTimePeriod;
}

UnderlyingEventTimePeriod.prototype.value = function () {
  return this.message;
};

UnderlyingEventTimePeriod.Tag = '1986';

UnderlyingEventTimePeriod.Type = 'INT';

module.exports = UnderlyingEventTimePeriod;