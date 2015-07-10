var invert = require('invert-obj');

function UnderlyingStreamCommoditySettlPeriodPriceCurrency (underlyingStreamCommoditySettlPeriodPriceCurrency) {
  this.message = underlyingStreamCommoditySettlPeriodPriceCurrency;
}

UnderlyingStreamCommoditySettlPeriodPriceCurrency.prototype.value = function () {
  return this.message;
};

UnderlyingStreamCommoditySettlPeriodPriceCurrency.Tag = '42012';

UnderlyingStreamCommoditySettlPeriodPriceCurrency.Type = 'CURRENCY';

module.exports = UnderlyingStreamCommoditySettlPeriodPriceCurrency;