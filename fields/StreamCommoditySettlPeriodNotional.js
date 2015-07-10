var invert = require('invert-obj');

function StreamCommoditySettlPeriodNotional (streamCommoditySettlPeriodNotional) {
  this.message = streamCommoditySettlPeriodNotional;
}

StreamCommoditySettlPeriodNotional.prototype.value = function () {
  return this.message;
};

StreamCommoditySettlPeriodNotional.Tag = '41293';

StreamCommoditySettlPeriodNotional.Type = 'QTY';

module.exports = StreamCommoditySettlPeriodNotional;