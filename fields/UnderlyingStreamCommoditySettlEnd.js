var invert = require('invert-obj');

function UnderlyingStreamCommoditySettlEnd (underlyingStreamCommoditySettlEnd) {
  this.message = underlyingStreamCommoditySettlEnd;
}

UnderlyingStreamCommoditySettlEnd.prototype.value = function () {
  return this.message;
};

UnderlyingStreamCommoditySettlEnd.Tag = '42001';

UnderlyingStreamCommoditySettlEnd.Type = 'STRING';

module.exports = UnderlyingStreamCommoditySettlEnd;