var invert = require('invert-obj');

function NoStreamCommodityDataSources (noStreamCommodityDataSources) {
  this.message = noStreamCommodityDataSources;
}

NoStreamCommodityDataSources.prototype.value = function () {
  return this.message;
};

NoStreamCommodityDataSources.Tag = '41280';

NoStreamCommodityDataSources.Type = 'NUMINGROUP';

module.exports = NoStreamCommodityDataSources;