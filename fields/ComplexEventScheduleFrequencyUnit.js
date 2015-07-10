var invert = require('invert-obj');

function ComplexEventScheduleFrequencyUnit (complexEventScheduleFrequencyUnit) {
  this.message = complexEventScheduleFrequencyUnit;
}

ComplexEventScheduleFrequencyUnit.prototype.value = function () {
  return this.message;
};

ComplexEventScheduleFrequencyUnit.Tag = '41035';

ComplexEventScheduleFrequencyUnit.Type = 'STRING';

module.exports = ComplexEventScheduleFrequencyUnit;