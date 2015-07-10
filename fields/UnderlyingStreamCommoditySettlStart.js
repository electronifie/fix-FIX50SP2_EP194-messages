var invert = require('invert-obj');

function UnderlyingStreamCommoditySettlStart (underlyingStreamCommoditySettlStart) {
  this.message = underlyingStreamCommoditySettlStart;
}

UnderlyingStreamCommoditySettlStart.prototype.value = function () {
  return this.message;
};

UnderlyingStreamCommoditySettlStart.Tag = '42000';

UnderlyingStreamCommoditySettlStart.Type = 'STRING';

module.exports = UnderlyingStreamCommoditySettlStart;