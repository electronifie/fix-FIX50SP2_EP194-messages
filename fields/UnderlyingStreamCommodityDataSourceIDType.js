var invert = require('invert-obj');

function UnderlyingStreamCommodityDataSourceIDType (underlyingStreamCommodityDataSourceIdtype) {
  this.message = underlyingStreamCommodityDataSourceIdtype;
}

UnderlyingStreamCommodityDataSourceIDType.prototype.value = function () {
  return this.message;
};

UnderlyingStreamCommodityDataSourceIDType.Tag = '41995';

UnderlyingStreamCommodityDataSourceIDType.Type = 'INT';

module.exports = UnderlyingStreamCommodityDataSourceIDType;