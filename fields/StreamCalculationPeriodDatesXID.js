var invert = require('invert-obj');

function StreamCalculationPeriodDatesXID (streamCalculationPeriodDatesXid) {
  this.message = streamCalculationPeriodDatesXid;
}

StreamCalculationPeriodDatesXID.prototype.value = function () {
  return this.message;
};

StreamCalculationPeriodDatesXID.Tag = '41244';

StreamCalculationPeriodDatesXID.Type = 'XID';

module.exports = StreamCalculationPeriodDatesXID;