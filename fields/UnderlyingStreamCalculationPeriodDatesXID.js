var invert = require('invert-obj');

function UnderlyingStreamCalculationPeriodDatesXID (underlyingStreamCalculationPeriodDatesXid) {
  this.message = underlyingStreamCalculationPeriodDatesXid;
}

UnderlyingStreamCalculationPeriodDatesXID.prototype.value = function () {
  return this.message;
};

UnderlyingStreamCalculationPeriodDatesXID.Tag = '41957';

UnderlyingStreamCalculationPeriodDatesXID.Type = 'XID';

module.exports = UnderlyingStreamCalculationPeriodDatesXID;