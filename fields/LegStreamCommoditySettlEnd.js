var invert = require('invert-obj');

function LegStreamCommoditySettlEnd (legStreamCommoditySettlEnd) {
  this.message = legStreamCommoditySettlEnd;
}

LegStreamCommoditySettlEnd.prototype.value = function () {
  return this.message;
};

LegStreamCommoditySettlEnd.Tag = '41685';

LegStreamCommoditySettlEnd.Type = 'STRING';

module.exports = LegStreamCommoditySettlEnd;