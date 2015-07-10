var invert = require('invert-obj');

function StreamCommodityDataSourceID (streamCommodityDataSourceId) {
  this.message = streamCommodityDataSourceId;
}

StreamCommodityDataSourceID.prototype.value = function () {
  return this.message;
};

StreamCommodityDataSourceID.Tag = '41281';

StreamCommodityDataSourceID.Type = 'STRING';

module.exports = StreamCommodityDataSourceID;