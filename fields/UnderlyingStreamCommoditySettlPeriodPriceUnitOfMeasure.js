var invert = require('invert-obj');

function UnderlyingStreamCommoditySettlPeriodPriceUnitOfMeasure (underlyingStreamCommoditySettlPeriodPriceUnitOfMeasure) {
  this.message = underlyingStreamCommoditySettlPeriodPriceUnitOfMeasure;
}

UnderlyingStreamCommoditySettlPeriodPriceUnitOfMeasure.prototype.value = function () {
  return this.message;
};

UnderlyingStreamCommoditySettlPeriodPriceUnitOfMeasure.Tag = '42011';

UnderlyingStreamCommoditySettlPeriodPriceUnitOfMeasure.Type = 'STRING';

module.exports = UnderlyingStreamCommoditySettlPeriodPriceUnitOfMeasure;