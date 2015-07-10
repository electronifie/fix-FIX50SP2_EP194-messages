var invert = require('invert-obj');

function LegStreamCommodityDataSourceIDType (legStreamCommodityDataSourceIdtype) {
  this.message = legStreamCommodityDataSourceIdtype;
}

LegStreamCommodityDataSourceIDType.prototype.value = function () {
  return this.message;
};

LegStreamCommodityDataSourceIDType.Tag = '41679';

LegStreamCommodityDataSourceIDType.Type = 'INT';

module.exports = LegStreamCommodityDataSourceIDType;