var invert = require('invert-obj');

function NoUnderlyingStreamCommoditySettlBusinessCenters (noUnderlyingStreamCommoditySettlBusinessCenters) {
  this.message = noUnderlyingStreamCommoditySettlBusinessCenters;
}

NoUnderlyingStreamCommoditySettlBusinessCenters.prototype.value = function () {
  return this.message;
};

NoUnderlyingStreamCommoditySettlBusinessCenters.Tag = '41962';

NoUnderlyingStreamCommoditySettlBusinessCenters.Type = 'NUMINGROUP';

module.exports = NoUnderlyingStreamCommoditySettlBusinessCenters;