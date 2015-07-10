var invert = require('invert-obj');

function LegStreamCommoditySettlPeriodPriceCurrency (legStreamCommoditySettlPeriodPriceCurrency) {
  this.message = legStreamCommoditySettlPeriodPriceCurrency;
}

LegStreamCommoditySettlPeriodPriceCurrency.prototype.value = function () {
  return this.message;
};

LegStreamCommoditySettlPeriodPriceCurrency.Tag = '41696';

LegStreamCommoditySettlPeriodPriceCurrency.Type = 'CURRENCY';

module.exports = LegStreamCommoditySettlPeriodPriceCurrency;