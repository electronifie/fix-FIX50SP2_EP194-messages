var invert = require('invert-obj');

function ComplexEventScheduleFrequencyPeriod (complexEventScheduleFrequencyPeriod) {
  this.message = complexEventScheduleFrequencyPeriod;
}

ComplexEventScheduleFrequencyPeriod.prototype.value = function () {
  return this.message;
};

ComplexEventScheduleFrequencyPeriod.Tag = '41034';

ComplexEventScheduleFrequencyPeriod.Type = 'INT';

module.exports = ComplexEventScheduleFrequencyPeriod;