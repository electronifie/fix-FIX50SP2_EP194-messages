var invert = require('invert-obj');

function StreamCommoditySettlTimeZone (streamCommoditySettlTimeZone) {
  this.message = streamCommoditySettlTimeZone;
}

StreamCommoditySettlTimeZone.prototype.value = function () {
  return this.message;
};

StreamCommoditySettlTimeZone.Tag = '41291';

StreamCommoditySettlTimeZone.Type = 'STRING';

module.exports = StreamCommoditySettlTimeZone;