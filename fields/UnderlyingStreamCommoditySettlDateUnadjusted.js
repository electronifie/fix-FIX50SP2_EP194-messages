var invert = require('invert-obj');

function UnderlyingStreamCommoditySettlDateUnadjusted (underlyingStreamCommoditySettlDateUnadjusted) {
  this.message = underlyingStreamCommoditySettlDateUnadjusted;
}

UnderlyingStreamCommoditySettlDateUnadjusted.prototype.value = function () {
  return this.message;
};

UnderlyingStreamCommoditySettlDateUnadjusted.Tag = '41981';

UnderlyingStreamCommoditySettlDateUnadjusted.Type = 'LOCALMKTDATE';

module.exports = UnderlyingStreamCommoditySettlDateUnadjusted;