var invert = require('invert-obj');

function NoLegStreamCommoditySettlPeriods (noLegStreamCommoditySettlPeriods) {
  this.message = noLegStreamCommoditySettlPeriods;
}

NoLegStreamCommoditySettlPeriods.prototype.value = function () {
  return this.message;
};

NoLegStreamCommoditySettlPeriods.Tag = '41686';

NoLegStreamCommoditySettlPeriods.Type = 'NUMINGROUP';

module.exports = NoLegStreamCommoditySettlPeriods;