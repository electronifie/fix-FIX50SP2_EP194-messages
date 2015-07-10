var invert = require('invert-obj');

function StreamCommoditySettlPeriodPriceUnitOfMeasure (streamCommoditySettlPeriodPriceUnitOfMeasure) {
  this.message = streamCommoditySettlPeriodPriceUnitOfMeasure;
}

StreamCommoditySettlPeriodPriceUnitOfMeasure.prototype.value = function () {
  return this.message;
};

StreamCommoditySettlPeriodPriceUnitOfMeasure.Tag = '41298';

StreamCommoditySettlPeriodPriceUnitOfMeasure.Type = 'STRING';

module.exports = StreamCommoditySettlPeriodPriceUnitOfMeasure;