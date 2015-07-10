var invert = require('invert-obj');

function StreamCommoditySettlDateAdjusted (streamCommoditySettlDateAdjusted) {
  this.message = streamCommoditySettlDateAdjusted;
}

StreamCommoditySettlDateAdjusted.prototype.value = function () {
  return this.message;
};

StreamCommoditySettlDateAdjusted.Tag = '41270';

StreamCommoditySettlDateAdjusted.Type = 'LOCALMKTDATE';

module.exports = StreamCommoditySettlDateAdjusted;