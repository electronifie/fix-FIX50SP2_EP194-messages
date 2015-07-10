var invert = require('invert-obj');

function UnderlyingStreamCommoditySettlPeriodXID (underlyingStreamCommoditySettlPeriodXid) {
  this.message = underlyingStreamCommoditySettlPeriodXid;
}

UnderlyingStreamCommoditySettlPeriodXID.prototype.value = function () {
  return this.message;
};

UnderlyingStreamCommoditySettlPeriodXID.Tag = '42014';

UnderlyingStreamCommoditySettlPeriodXID.Type = 'XID';

module.exports = UnderlyingStreamCommoditySettlPeriodXID;