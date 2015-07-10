var invert = require('invert-obj');

function LegStreamCommoditySettlDateAdjusted (legStreamCommoditySettlDateAdjusted) {
  this.message = legStreamCommoditySettlDateAdjusted;
}

LegStreamCommoditySettlDateAdjusted.prototype.value = function () {
  return this.message;
};

LegStreamCommoditySettlDateAdjusted.Tag = '41667';

LegStreamCommoditySettlDateAdjusted.Type = 'LOCALMKTDATE';

module.exports = LegStreamCommoditySettlDateAdjusted;