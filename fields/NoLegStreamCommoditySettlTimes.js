var invert = require('invert-obj');

function NoLegStreamCommoditySettlTimes (noLegStreamCommoditySettlTimes) {
  this.message = noLegStreamCommoditySettlTimes;
}

NoLegStreamCommoditySettlTimes.prototype.value = function () {
  return this.message;
};

NoLegStreamCommoditySettlTimes.Tag = '41683';

NoLegStreamCommoditySettlTimes.Type = 'NUMINGROUP';

module.exports = NoLegStreamCommoditySettlTimes;