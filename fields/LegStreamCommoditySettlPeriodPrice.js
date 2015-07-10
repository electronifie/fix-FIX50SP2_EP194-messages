var invert = require('invert-obj');

function LegStreamCommoditySettlPeriodPrice (legStreamCommoditySettlPeriodPrice) {
  this.message = legStreamCommoditySettlPeriodPrice;
}

LegStreamCommoditySettlPeriodPrice.prototype.value = function () {
  return this.message;
};

LegStreamCommoditySettlPeriodPrice.Tag = '41694';

LegStreamCommoditySettlPeriodPrice.Type = 'PRICE';

module.exports = LegStreamCommoditySettlPeriodPrice;