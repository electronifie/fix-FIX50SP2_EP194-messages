var invert = require('invert-obj');

function NoStreamCommoditySettlTimes (noStreamCommoditySettlTimes) {
  this.message = noStreamCommoditySettlTimes;
}

NoStreamCommoditySettlTimes.prototype.value = function () {
  return this.message;
};

NoStreamCommoditySettlTimes.Tag = '41286';

NoStreamCommoditySettlTimes.Type = 'NUMINGROUP';

module.exports = NoStreamCommoditySettlTimes;