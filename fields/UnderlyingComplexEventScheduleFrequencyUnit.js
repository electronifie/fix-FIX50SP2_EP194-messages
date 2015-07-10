var invert = require('invert-obj');

function UnderlyingComplexEventScheduleFrequencyUnit (underlyingComplexEventScheduleFrequencyUnit) {
  this.message = underlyingComplexEventScheduleFrequencyUnit;
}

UnderlyingComplexEventScheduleFrequencyUnit.prototype.value = function () {
  return this.message;
};

UnderlyingComplexEventScheduleFrequencyUnit.Tag = '41754';

UnderlyingComplexEventScheduleFrequencyUnit.Type = 'STRING';

module.exports = UnderlyingComplexEventScheduleFrequencyUnit;