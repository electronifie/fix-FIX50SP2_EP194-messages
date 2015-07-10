var invert = require('invert-obj');

function LegStreamCommodityUnitOfMeasure (legStreamCommodityUnitOfMeasure) {
  this.message = legStreamCommodityUnitOfMeasure;
}

LegStreamCommodityUnitOfMeasure.prototype.value = function () {
  return this.message;
};

LegStreamCommodityUnitOfMeasure.Tag = '41655';

LegStreamCommodityUnitOfMeasure.Type = 'STRING';

module.exports = LegStreamCommodityUnitOfMeasure;