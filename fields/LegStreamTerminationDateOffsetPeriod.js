var invert = require('invert-obj');

function LegStreamTerminationDateOffsetPeriod (legStreamTerminationDateOffsetPeriod) {
  this.message = legStreamTerminationDateOffsetPeriod;
}

LegStreamTerminationDateOffsetPeriod.prototype.value = function () {
  return this.message;
};

LegStreamTerminationDateOffsetPeriod.Tag = '40261';

LegStreamTerminationDateOffsetPeriod.Type = 'INT';

module.exports = LegStreamTerminationDateOffsetPeriod;