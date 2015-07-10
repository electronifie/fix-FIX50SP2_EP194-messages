var invert = require('invert-obj');

function LegStreamCommodityDataSourceID (legStreamCommodityDataSourceId) {
  this.message = legStreamCommodityDataSourceId;
}

LegStreamCommodityDataSourceID.prototype.value = function () {
  return this.message;
};

LegStreamCommodityDataSourceID.Tag = '41678';

LegStreamCommodityDataSourceID.Type = 'STRING';

module.exports = LegStreamCommodityDataSourceID;