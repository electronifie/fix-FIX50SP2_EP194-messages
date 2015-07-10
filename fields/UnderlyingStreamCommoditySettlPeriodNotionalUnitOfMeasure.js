var invert = require('invert-obj');

function UnderlyingStreamCommoditySettlPeriodNotionalUnitOfMeasure (underlyingStreamCommoditySettlPeriodNotionalUnitOfMeasure) {
  this.message = underlyingStreamCommoditySettlPeriodNotionalUnitOfMeasure;
}

UnderlyingStreamCommoditySettlPeriodNotionalUnitOfMeasure.prototype.value = function () {
  return this.message;
};

UnderlyingStreamCommoditySettlPeriodNotionalUnitOfMeasure.Tag = '42007';

UnderlyingStreamCommoditySettlPeriodNotionalUnitOfMeasure.Type = 'STRING';

module.exports = UnderlyingStreamCommoditySettlPeriodNotionalUnitOfMeasure;