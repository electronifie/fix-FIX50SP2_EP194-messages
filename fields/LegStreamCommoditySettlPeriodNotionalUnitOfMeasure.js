var invert = require('invert-obj');

function LegStreamCommoditySettlPeriodNotionalUnitOfMeasure (legStreamCommoditySettlPeriodNotionalUnitOfMeasure) {
  this.message = legStreamCommoditySettlPeriodNotionalUnitOfMeasure;
}

LegStreamCommoditySettlPeriodNotionalUnitOfMeasure.prototype.value = function () {
  return this.message;
};

LegStreamCommoditySettlPeriodNotionalUnitOfMeasure.Tag = '41691';

LegStreamCommoditySettlPeriodNotionalUnitOfMeasure.Type = 'STRING';

module.exports = LegStreamCommoditySettlPeriodNotionalUnitOfMeasure;