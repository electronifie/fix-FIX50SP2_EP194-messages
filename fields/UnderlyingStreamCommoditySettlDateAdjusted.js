var invert = require('invert-obj');

function UnderlyingStreamCommoditySettlDateAdjusted (underlyingStreamCommoditySettlDateAdjusted) {
  this.message = underlyingStreamCommoditySettlDateAdjusted;
}

UnderlyingStreamCommoditySettlDateAdjusted.prototype.value = function () {
  return this.message;
};

UnderlyingStreamCommoditySettlDateAdjusted.Tag = '41983';

UnderlyingStreamCommoditySettlDateAdjusted.Type = 'LOCALMKTDATE';

module.exports = UnderlyingStreamCommoditySettlDateAdjusted;