var invert = require('invert-obj');

function UnderlyingStreamCommoditySettlTimeZone (underlyingStreamCommoditySettlTimeZone) {
  this.message = underlyingStreamCommoditySettlTimeZone;
}

UnderlyingStreamCommoditySettlTimeZone.prototype.value = function () {
  return this.message;
};

UnderlyingStreamCommoditySettlTimeZone.Tag = '42004';

UnderlyingStreamCommoditySettlTimeZone.Type = 'STRING';

module.exports = UnderlyingStreamCommoditySettlTimeZone;