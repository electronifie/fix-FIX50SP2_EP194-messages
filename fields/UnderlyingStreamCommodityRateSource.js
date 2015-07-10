var invert = require('invert-obj');

function UnderlyingStreamCommodityRateSource (underlyingStreamCommodityRateSource) {
  this.message = underlyingStreamCommodityRateSource;
}

UnderlyingStreamCommodityRateSource.prototype.value = function () {
  return this.message;
};

UnderlyingStreamCommodityRateSource.Tag = '41974';

UnderlyingStreamCommodityRateSource.Type = 'INT';

module.exports = UnderlyingStreamCommodityRateSource;