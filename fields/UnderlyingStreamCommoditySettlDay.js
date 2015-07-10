var invert = require('invert-obj');

function UnderlyingStreamCommoditySettlDay (underlyingStreamCommoditySettlDay) {
  this.message = underlyingStreamCommoditySettlDay;
}

UnderlyingStreamCommoditySettlDay.prototype.value = function () {
  return this.message;
};

UnderlyingStreamCommoditySettlDay.Tag = '41997';

UnderlyingStreamCommoditySettlDay.Type = 'INT';

module.exports = UnderlyingStreamCommoditySettlDay;