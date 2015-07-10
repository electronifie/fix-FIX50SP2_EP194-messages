var invert = require('invert-obj');

function NoLegStreamCommoditySettlDays (noLegStreamCommoditySettlDays) {
  this.message = noLegStreamCommoditySettlDays;
}

NoLegStreamCommoditySettlDays.prototype.value = function () {
  return this.message;
};

NoLegStreamCommoditySettlDays.Tag = '41680';

NoLegStreamCommoditySettlDays.Type = 'NUMINGROUP';

module.exports = NoLegStreamCommoditySettlDays;