var invert = require('invert-obj');

function LegStreamCommodityRateSource (legStreamCommodityRateSource) {
  this.message = legStreamCommodityRateSource;
}

LegStreamCommodityRateSource.prototype.value = function () {
  return this.message;
};

LegStreamCommodityRateSource.Tag = '41658';

LegStreamCommodityRateSource.Type = 'INT';

module.exports = LegStreamCommodityRateSource;