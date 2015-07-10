var invert = require('invert-obj');

function NoLegStreamCommoditySettlBusinessCenters (noLegStreamCommoditySettlBusinessCenters) {
  this.message = noLegStreamCommoditySettlBusinessCenters;
}

NoLegStreamCommoditySettlBusinessCenters.prototype.value = function () {
  return this.message;
};

NoLegStreamCommoditySettlBusinessCenters.Tag = '41646';

NoLegStreamCommoditySettlBusinessCenters.Type = 'NUMINGROUP';

module.exports = NoLegStreamCommoditySettlBusinessCenters;