var invert = require('invert-obj');

function UnderlyingStreamCommodityDataSourceID (underlyingStreamCommodityDataSourceId) {
  this.message = underlyingStreamCommodityDataSourceId;
}

UnderlyingStreamCommodityDataSourceID.prototype.value = function () {
  return this.message;
};

UnderlyingStreamCommodityDataSourceID.Tag = '41994';

UnderlyingStreamCommodityDataSourceID.Type = 'STRING';

module.exports = UnderlyingStreamCommodityDataSourceID;