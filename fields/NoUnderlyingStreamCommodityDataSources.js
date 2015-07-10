var invert = require('invert-obj');

function NoUnderlyingStreamCommodityDataSources (noUnderlyingStreamCommodityDataSources) {
  this.message = noUnderlyingStreamCommodityDataSources;
}

NoUnderlyingStreamCommodityDataSources.prototype.value = function () {
  return this.message;
};

NoUnderlyingStreamCommodityDataSources.Tag = '41993';

NoUnderlyingStreamCommodityDataSources.Type = 'NUMINGROUP';

module.exports = NoUnderlyingStreamCommodityDataSources;