var invert = require('invert-obj');

function StreamCommoditySettlFlowType (streamCommoditySettlFlowType) {
  this.message = streamCommoditySettlFlowType;
}

StreamCommoditySettlFlowType.prototype.value = function () {
  return this.message;
};

StreamCommoditySettlFlowType.Tag = '41292';

StreamCommoditySettlFlowType.Type = 'INT';

module.exports = StreamCommoditySettlFlowType;