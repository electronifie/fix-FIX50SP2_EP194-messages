var invert = require('invert-obj');

function NoUnderlyingStreamCommoditySettlTimes (noUnderlyingStreamCommoditySettlTimes) {
  this.message = noUnderlyingStreamCommoditySettlTimes;
}

NoUnderlyingStreamCommoditySettlTimes.prototype.value = function () {
  return this.message;
};

NoUnderlyingStreamCommoditySettlTimes.Tag = '41999';

NoUnderlyingStreamCommoditySettlTimes.Type = 'NUMINGROUP';

module.exports = NoUnderlyingStreamCommoditySettlTimes;