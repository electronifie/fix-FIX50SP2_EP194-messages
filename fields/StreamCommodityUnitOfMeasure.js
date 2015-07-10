var invert = require('invert-obj');

function StreamCommodityUnitOfMeasure (streamCommodityUnitOfMeasure) {
  this.message = streamCommodityUnitOfMeasure;
}

StreamCommodityUnitOfMeasure.prototype.value = function () {
  return this.message;
};

StreamCommodityUnitOfMeasure.Tag = '41258';

StreamCommodityUnitOfMeasure.Type = 'STRING';

module.exports = StreamCommodityUnitOfMeasure;