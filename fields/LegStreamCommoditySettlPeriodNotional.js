var invert = require('invert-obj');

function LegStreamCommoditySettlPeriodNotional (legStreamCommoditySettlPeriodNotional) {
  this.message = legStreamCommoditySettlPeriodNotional;
}

LegStreamCommoditySettlPeriodNotional.prototype.value = function () {
  return this.message;
};

LegStreamCommoditySettlPeriodNotional.Tag = '41690';

LegStreamCommoditySettlPeriodNotional.Type = 'QTY';

module.exports = LegStreamCommoditySettlPeriodNotional;