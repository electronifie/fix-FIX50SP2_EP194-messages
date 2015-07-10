var invert = require('invert-obj');

function StreamCommodityType (streamCommodityType) {
  this.message = streamCommodityType;
}

StreamCommodityType.prototype.value = function () {
  return this.message;
};

StreamCommodityType.Tag = '41252';

StreamCommodityType.Type = 'STRING';

module.exports = StreamCommodityType;