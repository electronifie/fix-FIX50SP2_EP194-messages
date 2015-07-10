var invert = require('invert-obj');

function NoUnderlyingStreamCommoditySettlPeriods (noUnderlyingStreamCommoditySettlPeriods) {
  this.message = noUnderlyingStreamCommoditySettlPeriods;
}

NoUnderlyingStreamCommoditySettlPeriods.prototype.value = function () {
  return this.message;
};

NoUnderlyingStreamCommoditySettlPeriods.Tag = '42002';

NoUnderlyingStreamCommoditySettlPeriods.Type = 'NUMINGROUP';

module.exports = NoUnderlyingStreamCommoditySettlPeriods;