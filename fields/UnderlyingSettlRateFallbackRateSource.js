var invert = require('invert-obj');

function UnderlyingSettlRateFallbackRateSource (underlyingSettlRateFallbackRateSource) {
  this.message = underlyingSettlRateFallbackRateSource;
}

UnderlyingSettlRateFallbackRateSource.prototype.value = function () {
  return this.message;
};

UnderlyingSettlRateFallbackRateSource.Tag = '40904';

UnderlyingSettlRateFallbackRateSource.Type = 'INT';

module.exports = UnderlyingSettlRateFallbackRateSource;