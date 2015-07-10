var invert = require('invert-obj');

function LegStreamCommoditySettlTimeZone (legStreamCommoditySettlTimeZone) {
  this.message = legStreamCommoditySettlTimeZone;
}

LegStreamCommoditySettlTimeZone.prototype.value = function () {
  return this.message;
};

LegStreamCommoditySettlTimeZone.Tag = '41688';

LegStreamCommoditySettlTimeZone.Type = 'STRING';

module.exports = LegStreamCommoditySettlTimeZone;