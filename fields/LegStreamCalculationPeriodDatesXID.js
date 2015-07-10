var invert = require('invert-obj');

function LegStreamCalculationPeriodDatesXID (legStreamCalculationPeriodDatesXid) {
  this.message = legStreamCalculationPeriodDatesXid;
}

LegStreamCalculationPeriodDatesXID.prototype.value = function () {
  return this.message;
};

LegStreamCalculationPeriodDatesXID.Tag = '41641';

LegStreamCalculationPeriodDatesXID.Type = 'XID';

module.exports = LegStreamCalculationPeriodDatesXID;