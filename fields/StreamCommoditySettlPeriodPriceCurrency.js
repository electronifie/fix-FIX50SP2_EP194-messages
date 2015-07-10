var invert = require('invert-obj');

function StreamCommoditySettlPeriodPriceCurrency (streamCommoditySettlPeriodPriceCurrency) {
  this.message = streamCommoditySettlPeriodPriceCurrency;
}

StreamCommoditySettlPeriodPriceCurrency.prototype.value = function () {
  return this.message;
};

StreamCommoditySettlPeriodPriceCurrency.Tag = '41299';

StreamCommoditySettlPeriodPriceCurrency.Type = 'CURRENCY';

module.exports = StreamCommoditySettlPeriodPriceCurrency;