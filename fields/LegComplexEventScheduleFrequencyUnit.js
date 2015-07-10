var invert = require('invert-obj');

function LegComplexEventScheduleFrequencyUnit (legComplexEventScheduleFrequencyUnit) {
  this.message = legComplexEventScheduleFrequencyUnit;
}

LegComplexEventScheduleFrequencyUnit.prototype.value = function () {
  return this.message;
};

LegComplexEventScheduleFrequencyUnit.Tag = '41404';

LegComplexEventScheduleFrequencyUnit.Type = 'STRING';

module.exports = LegComplexEventScheduleFrequencyUnit;