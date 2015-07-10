var invert = require('invert-obj');

function LegStreamCommoditySettlFlowType (legStreamCommoditySettlFlowType) {
  this.message = legStreamCommoditySettlFlowType;
}

LegStreamCommoditySettlFlowType.prototype.value = function () {
  return this.message;
};

LegStreamCommoditySettlFlowType.Tag = '41689';

LegStreamCommoditySettlFlowType.Type = 'INT';

module.exports = LegStreamCommoditySettlFlowType;