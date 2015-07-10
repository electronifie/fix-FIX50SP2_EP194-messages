var invert = require('invert-obj');

function LegStreamCommoditySettlBusinessCenter (legStreamCommoditySettlBusinessCenter) {
  this.message = legStreamCommoditySettlBusinessCenter;
}

LegStreamCommoditySettlBusinessCenter.prototype.value = function () {
  return this.message;
};

LegStreamCommoditySettlBusinessCenter.Tag = '41647';

LegStreamCommoditySettlBusinessCenter.Type = 'STRING';

module.exports = LegStreamCommoditySettlBusinessCenter;