var invert = require('invert-obj');

function LegComplexEventScheduleFrequencyPeriod (legComplexEventScheduleFrequencyPeriod) {
  this.message = legComplexEventScheduleFrequencyPeriod;
}

LegComplexEventScheduleFrequencyPeriod.prototype.value = function () {
  return this.message;
};

LegComplexEventScheduleFrequencyPeriod.Tag = '41403';

LegComplexEventScheduleFrequencyPeriod.Type = 'INT';

module.exports = LegComplexEventScheduleFrequencyPeriod;