var invert = require('invert-obj');

function UnderlyingStreamCalculationPeriodDatesXIDRef (underlyingStreamCalculationPeriodDatesXidref) {
  this.message = underlyingStreamCalculationPeriodDatesXidref;
}

UnderlyingStreamCalculationPeriodDatesXIDRef.prototype.value = function () {
  return this.message;
};

UnderlyingStreamCalculationPeriodDatesXIDRef.Tag = '41958';

UnderlyingStreamCalculationPeriodDatesXIDRef.Type = 'XIDREF';

module.exports = UnderlyingStreamCalculationPeriodDatesXIDRef;