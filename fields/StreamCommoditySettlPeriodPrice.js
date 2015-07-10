var invert = require('invert-obj');

function StreamCommoditySettlPeriodPrice (streamCommoditySettlPeriodPrice) {
  this.message = streamCommoditySettlPeriodPrice;
}

StreamCommoditySettlPeriodPrice.prototype.value = function () {
  return this.message;
};

StreamCommoditySettlPeriodPrice.Tag = '41297';

StreamCommoditySettlPeriodPrice.Type = 'PRICE';

module.exports = StreamCommoditySettlPeriodPrice;