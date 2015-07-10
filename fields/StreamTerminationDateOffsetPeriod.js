var invert = require('invert-obj');

function StreamTerminationDateOffsetPeriod (streamTerminationDateOffsetPeriod) {
  this.message = streamTerminationDateOffsetPeriod;
}

StreamTerminationDateOffsetPeriod.prototype.value = function () {
  return this.message;
};

StreamTerminationDateOffsetPeriod.Tag = '40069';

StreamTerminationDateOffsetPeriod.Type = 'INT';

module.exports = StreamTerminationDateOffsetPeriod;