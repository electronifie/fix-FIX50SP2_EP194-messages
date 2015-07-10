var invert = require('invert-obj');

function LegComplexEventScheduleRollConvention (legComplexEventScheduleRollConvention) {
  this.message = legComplexEventScheduleRollConvention;
}

LegComplexEventScheduleRollConvention.prototype.value = function () {
  return this.message;
};

LegComplexEventScheduleRollConvention.Tag = '41405';

LegComplexEventScheduleRollConvention.Type = 'STRING';

module.exports = LegComplexEventScheduleRollConvention;