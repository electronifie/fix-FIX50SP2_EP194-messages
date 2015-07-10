var invert = require('invert-obj');

function StreamCommoditySettlPeriodXID (streamCommoditySettlPeriodXid) {
  this.message = streamCommoditySettlPeriodXid;
}

StreamCommoditySettlPeriodXID.prototype.value = function () {
  return this.message;
};

StreamCommoditySettlPeriodXID.Tag = '41301';

StreamCommoditySettlPeriodXID.Type = 'XID';

module.exports = StreamCommoditySettlPeriodXID;