var invert = require('invert-obj');

function NoStreamCommoditySettlDays (noStreamCommoditySettlDays) {
  this.message = noStreamCommoditySettlDays;
}

NoStreamCommoditySettlDays.prototype.value = function () {
  return this.message;
};

NoStreamCommoditySettlDays.Tag = '41283';

NoStreamCommoditySettlDays.Type = 'NUMINGROUP';

module.exports = NoStreamCommoditySettlDays;