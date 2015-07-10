var invert = require('invert-obj');

function UnderlyingStreamCommodityUnitOfMeasure (underlyingStreamCommodityUnitOfMeasure) {
  this.message = underlyingStreamCommodityUnitOfMeasure;
}

UnderlyingStreamCommodityUnitOfMeasure.prototype.value = function () {
  return this.message;
};

UnderlyingStreamCommodityUnitOfMeasure.Tag = '41971';

UnderlyingStreamCommodityUnitOfMeasure.Type = 'STRING';

module.exports = UnderlyingStreamCommodityUnitOfMeasure;