var invert = require('invert-obj');

function UnderlyingComplexEventScheduleFrequencyPeriod (underlyingComplexEventScheduleFrequencyPeriod) {
  this.message = underlyingComplexEventScheduleFrequencyPeriod;
}

UnderlyingComplexEventScheduleFrequencyPeriod.prototype.value = function () {
  return this.message;
};

UnderlyingComplexEventScheduleFrequencyPeriod.Tag = '41753';

UnderlyingComplexEventScheduleFrequencyPeriod.Type = 'INT';

module.exports = UnderlyingComplexEventScheduleFrequencyPeriod;