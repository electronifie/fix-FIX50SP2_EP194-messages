var invert = require('invert-obj');

function LegStreamCommoditySettlDateUnadjusted (legStreamCommoditySettlDateUnadjusted) {
  this.message = legStreamCommoditySettlDateUnadjusted;
}

LegStreamCommoditySettlDateUnadjusted.prototype.value = function () {
  return this.message;
};

LegStreamCommoditySettlDateUnadjusted.Tag = '41665';

LegStreamCommoditySettlDateUnadjusted.Type = 'LOCALMKTDATE';

module.exports = LegStreamCommoditySettlDateUnadjusted;