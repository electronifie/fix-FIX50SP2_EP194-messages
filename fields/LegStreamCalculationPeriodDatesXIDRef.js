var invert = require('invert-obj');

function LegStreamCalculationPeriodDatesXIDRef (legStreamCalculationPeriodDatesXidref) {
  this.message = legStreamCalculationPeriodDatesXidref;
}

LegStreamCalculationPeriodDatesXIDRef.prototype.value = function () {
  return this.message;
};

LegStreamCalculationPeriodDatesXIDRef.Tag = '41642';

LegStreamCalculationPeriodDatesXIDRef.Type = 'XIDREF';

module.exports = LegStreamCalculationPeriodDatesXIDRef;