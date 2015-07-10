var invert = require('invert-obj');

function NoUnderlyingStreamCommoditySettlDays (noUnderlyingStreamCommoditySettlDays) {
  this.message = noUnderlyingStreamCommoditySettlDays;
}

NoUnderlyingStreamCommoditySettlDays.prototype.value = function () {
  return this.message;
};

NoUnderlyingStreamCommoditySettlDays.Tag = '41996';

NoUnderlyingStreamCommoditySettlDays.Type = 'NUMINGROUP';

module.exports = NoUnderlyingStreamCommoditySettlDays;