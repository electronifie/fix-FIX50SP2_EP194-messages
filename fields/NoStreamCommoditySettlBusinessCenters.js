var invert = require('invert-obj');

function NoStreamCommoditySettlBusinessCenters (noStreamCommoditySettlBusinessCenters) {
  this.message = noStreamCommoditySettlBusinessCenters;
}

NoStreamCommoditySettlBusinessCenters.prototype.value = function () {
  return this.message;
};

NoStreamCommoditySettlBusinessCenters.Tag = '41249';

NoStreamCommoditySettlBusinessCenters.Type = 'NUMINGROUP';

module.exports = NoStreamCommoditySettlBusinessCenters;