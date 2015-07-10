var invert = require('invert-obj');

function LegStreamCommoditySettlStart (legStreamCommoditySettlStart) {
  this.message = legStreamCommoditySettlStart;
}

LegStreamCommoditySettlStart.prototype.value = function () {
  return this.message;
};

LegStreamCommoditySettlStart.Tag = '41684';

LegStreamCommoditySettlStart.Type = 'STRING';

module.exports = LegStreamCommoditySettlStart;