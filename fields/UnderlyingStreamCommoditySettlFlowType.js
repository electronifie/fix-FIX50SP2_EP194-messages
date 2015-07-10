var invert = require('invert-obj');

function UnderlyingStreamCommoditySettlFlowType (underlyingStreamCommoditySettlFlowType) {
  this.message = underlyingStreamCommoditySettlFlowType;
}

UnderlyingStreamCommoditySettlFlowType.prototype.value = function () {
  return this.message;
};

UnderlyingStreamCommoditySettlFlowType.Tag = '42005';

UnderlyingStreamCommoditySettlFlowType.Type = 'INT';

module.exports = UnderlyingStreamCommoditySettlFlowType;