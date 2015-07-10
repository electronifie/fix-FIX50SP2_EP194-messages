var invert = require('invert-obj');

function UnderlyingStreamCommoditySettlPeriodPrice (underlyingStreamCommoditySettlPeriodPrice) {
  this.message = underlyingStreamCommoditySettlPeriodPrice;
}

UnderlyingStreamCommoditySettlPeriodPrice.prototype.value = function () {
  return this.message;
};

UnderlyingStreamCommoditySettlPeriodPrice.Tag = '42010';

UnderlyingStreamCommoditySettlPeriodPrice.Type = 'PRICE';

module.exports = UnderlyingStreamCommoditySettlPeriodPrice;