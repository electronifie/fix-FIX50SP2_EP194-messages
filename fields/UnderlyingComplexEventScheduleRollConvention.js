var invert = require('invert-obj');

function UnderlyingComplexEventScheduleRollConvention (underlyingComplexEventScheduleRollConvention) {
  this.message = underlyingComplexEventScheduleRollConvention;
}

UnderlyingComplexEventScheduleRollConvention.prototype.value = function () {
  return this.message;
};

UnderlyingComplexEventScheduleRollConvention.Tag = '41755';

UnderlyingComplexEventScheduleRollConvention.Type = 'STRING';

module.exports = UnderlyingComplexEventScheduleRollConvention;