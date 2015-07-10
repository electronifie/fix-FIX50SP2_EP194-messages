var invert = require('invert-obj');

function StreamCalculationPeriodDatesXIDRef (streamCalculationPeriodDatesXidref) {
  this.message = streamCalculationPeriodDatesXidref;
}

StreamCalculationPeriodDatesXIDRef.prototype.value = function () {
  return this.message;
};

StreamCalculationPeriodDatesXIDRef.Tag = '41245';

StreamCalculationPeriodDatesXIDRef.Type = 'XIDREF';

module.exports = StreamCalculationPeriodDatesXIDRef;