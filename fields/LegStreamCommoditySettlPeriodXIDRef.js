var invert = require('invert-obj');

function LegStreamCommoditySettlPeriodXIDRef (legStreamCommoditySettlPeriodXidref) {
  this.message = legStreamCommoditySettlPeriodXidref;
}

LegStreamCommoditySettlPeriodXIDRef.prototype.value = function () {
  return this.message;
};

LegStreamCommoditySettlPeriodXIDRef.Tag = '41699';

LegStreamCommoditySettlPeriodXIDRef.Type = 'XIDREF';

module.exports = LegStreamCommoditySettlPeriodXIDRef;