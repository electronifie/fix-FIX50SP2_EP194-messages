var invert = require('invert-obj');

function EventTimePeriod (eventTimePeriod) {
  this.message = eventTimePeriod;
}

EventTimePeriod.prototype.value = function () {
  return this.message;
};

EventTimePeriod.Tag = '1826';

EventTimePeriod.Type = 'INT';

module.exports = EventTimePeriod;