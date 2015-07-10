var invert = require('invert-obj');

function StreamCommodityRateSource (streamCommodityRateSource) {
  this.message = streamCommodityRateSource;
}

StreamCommodityRateSource.prototype.value = function () {
  return this.message;
};

StreamCommodityRateSource.Tag = '41261';

StreamCommodityRateSource.Type = 'INT';

module.exports = StreamCommodityRateSource;