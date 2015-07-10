var invert = require('invert-obj');

function LegSettlRateFallbackRateSource (legSettlRateFallbackRateSource) {
  this.message = legSettlRateFallbackRateSource;
}

LegSettlRateFallbackRateSource.prototype.value = function () {
  return this.message;
};

LegSettlRateFallbackRateSource.Tag = '40366';

LegSettlRateFallbackRateSource.Type = 'INT';

module.exports = LegSettlRateFallbackRateSource;