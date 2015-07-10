var invert = require('invert-obj');

function StreamCommoditySettlTimeType (streamCommoditySettlTimeType) {
  this.message = streamCommoditySettlTimeType;
}

StreamCommoditySettlTimeType.prototype.value = function () {
  return this.message;
};

StreamCommoditySettlTimeType.Tag = '41588';

StreamCommoditySettlTimeType.Type = 'INT';

module.exports = StreamCommoditySettlTimeType;