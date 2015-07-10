var invert = require('invert-obj');

function StreamCommoditySettlPeriodNotionalUnitOfMeasure (streamCommoditySettlPeriodNotionalUnitOfMeasure) {
  this.message = streamCommoditySettlPeriodNotionalUnitOfMeasure;
}

StreamCommoditySettlPeriodNotionalUnitOfMeasure.prototype.value = function () {
  return this.message;
};

StreamCommoditySettlPeriodNotionalUnitOfMeasure.Tag = '41294';

StreamCommoditySettlPeriodNotionalUnitOfMeasure.Type = 'STRING';

module.exports = StreamCommoditySettlPeriodNotionalUnitOfMeasure;