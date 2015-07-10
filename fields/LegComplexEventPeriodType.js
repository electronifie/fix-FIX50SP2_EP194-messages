var invert = require('invert-obj');

function LegComplexEventPeriodType (legComplexEventPeriodType) {
  this.message = legComplexEventPeriodType;
}

LegComplexEventPeriodType.prototype.value = function () {
  return this.message;
};

LegComplexEventPeriodType.Tag = '41380';

LegComplexEventPeriodType.Type = 'INT';

module.exports = LegComplexEventPeriodType;