var invert = require('invert-obj');

function NoLegStreamCommodityDataSources (noLegStreamCommodityDataSources) {
  this.message = noLegStreamCommodityDataSources;
}

NoLegStreamCommodityDataSources.prototype.value = function () {
  return this.message;
};

NoLegStreamCommodityDataSources.Tag = '41677';

NoLegStreamCommodityDataSources.Type = 'NUMINGROUP';

module.exports = NoLegStreamCommodityDataSources;