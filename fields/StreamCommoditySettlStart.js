var invert = require('invert-obj');

function StreamCommoditySettlStart (streamCommoditySettlStart) {
  this.message = streamCommoditySettlStart;
}

StreamCommoditySettlStart.prototype.value = function () {
  return this.message;
};

StreamCommoditySettlStart.Tag = '41287';

StreamCommoditySettlStart.Type = 'STRING';

module.exports = StreamCommoditySettlStart;