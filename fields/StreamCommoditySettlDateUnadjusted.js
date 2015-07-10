var invert = require('invert-obj');

function StreamCommoditySettlDateUnadjusted (streamCommoditySettlDateUnadjusted) {
  this.message = streamCommoditySettlDateUnadjusted;
}

StreamCommoditySettlDateUnadjusted.prototype.value = function () {
  return this.message;
};

StreamCommoditySettlDateUnadjusted.Tag = '41268';

StreamCommoditySettlDateUnadjusted.Type = 'LOCALMKTDATE';

module.exports = StreamCommoditySettlDateUnadjusted;