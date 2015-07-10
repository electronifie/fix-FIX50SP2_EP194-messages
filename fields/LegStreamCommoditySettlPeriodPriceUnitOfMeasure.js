var invert = require('invert-obj');

function LegStreamCommoditySettlPeriodPriceUnitOfMeasure (legStreamCommoditySettlPeriodPriceUnitOfMeasure) {
  this.message = legStreamCommoditySettlPeriodPriceUnitOfMeasure;
}

LegStreamCommoditySettlPeriodPriceUnitOfMeasure.prototype.value = function () {
  return this.message;
};

LegStreamCommoditySettlPeriodPriceUnitOfMeasure.Tag = '41695';

LegStreamCommoditySettlPeriodPriceUnitOfMeasure.Type = 'STRING';

module.exports = LegStreamCommoditySettlPeriodPriceUnitOfMeasure;