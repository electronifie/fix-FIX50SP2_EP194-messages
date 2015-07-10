var invert = require('invert-obj');

function LegComplexEventPeriodDate (legComplexEventPeriodDate) {
  this.message = legComplexEventPeriodDate;
}

LegComplexEventPeriodDate.prototype.value = function () {
  return this.message;
};

LegComplexEventPeriodDate.Tag = '41377';

LegComplexEventPeriodDate.Type = 'LOCALMKTDATE';

module.exports = LegComplexEventPeriodDate;