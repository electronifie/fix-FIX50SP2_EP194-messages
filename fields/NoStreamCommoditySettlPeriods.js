var invert = require('invert-obj');

function NoStreamCommoditySettlPeriods (noStreamCommoditySettlPeriods) {
  this.message = noStreamCommoditySettlPeriods;
}

NoStreamCommoditySettlPeriods.prototype.value = function () {
  return this.message;
};

NoStreamCommoditySettlPeriods.Tag = '41289';

NoStreamCommoditySettlPeriods.Type = 'NUMINGROUP';

module.exports = NoStreamCommoditySettlPeriods;