var invert = require('invert-obj');

function UnderlyingStreamCommoditySettlBusinessCenter (underlyingStreamCommoditySettlBusinessCenter) {
  this.message = underlyingStreamCommoditySettlBusinessCenter;
}

UnderlyingStreamCommoditySettlBusinessCenter.prototype.value = function () {
  return this.message;
};

UnderlyingStreamCommoditySettlBusinessCenter.Tag = '41963';

UnderlyingStreamCommoditySettlBusinessCenter.Type = 'STRING';

module.exports = UnderlyingStreamCommoditySettlBusinessCenter;