var invert = require('invert-obj');

function UnderlyingStreamCommoditySettlPeriodNotional (underlyingStreamCommoditySettlPeriodNotional) {
  this.message = underlyingStreamCommoditySettlPeriodNotional;
}

UnderlyingStreamCommoditySettlPeriodNotional.prototype.value = function () {
  return this.message;
};

UnderlyingStreamCommoditySettlPeriodNotional.Tag = '42006';

UnderlyingStreamCommoditySettlPeriodNotional.Type = 'QTY';

module.exports = UnderlyingStreamCommoditySettlPeriodNotional;