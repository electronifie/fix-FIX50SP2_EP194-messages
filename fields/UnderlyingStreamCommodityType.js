var invert = require('invert-obj');

function UnderlyingStreamCommodityType (underlyingStreamCommodityType) {
  this.message = underlyingStreamCommodityType;
}

UnderlyingStreamCommodityType.prototype.value = function () {
  return this.message;
};

UnderlyingStreamCommodityType.Tag = '41965';

UnderlyingStreamCommodityType.Type = 'STRING';

module.exports = UnderlyingStreamCommodityType;