var invert = require('invert-obj');

function UnderlyingStreamCommoditySettlTimeType (underlyingStreamCommoditySettlTimeType) {
  this.message = underlyingStreamCommoditySettlTimeType;
}

UnderlyingStreamCommoditySettlTimeType.prototype.value = function () {
  return this.message;
};

UnderlyingStreamCommoditySettlTimeType.Tag = '41936';

UnderlyingStreamCommoditySettlTimeType.Type = 'INT';

module.exports = UnderlyingStreamCommoditySettlTimeType;