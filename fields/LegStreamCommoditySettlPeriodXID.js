var invert = require('invert-obj');

function LegStreamCommoditySettlPeriodXID (legStreamCommoditySettlPeriodXid) {
  this.message = legStreamCommoditySettlPeriodXid;
}

LegStreamCommoditySettlPeriodXID.prototype.value = function () {
  return this.message;
};

LegStreamCommoditySettlPeriodXID.Tag = '41698';

LegStreamCommoditySettlPeriodXID.Type = 'XID';

module.exports = LegStreamCommoditySettlPeriodXID;