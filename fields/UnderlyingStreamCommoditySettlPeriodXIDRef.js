var invert = require('invert-obj');

function UnderlyingStreamCommoditySettlPeriodXIDRef (underlyingStreamCommoditySettlPeriodXidref) {
  this.message = underlyingStreamCommoditySettlPeriodXidref;
}

UnderlyingStreamCommoditySettlPeriodXIDRef.prototype.value = function () {
  return this.message;
};

UnderlyingStreamCommoditySettlPeriodXIDRef.Tag = '42015';

UnderlyingStreamCommoditySettlPeriodXIDRef.Type = 'XIDREF';

module.exports = UnderlyingStreamCommoditySettlPeriodXIDRef;