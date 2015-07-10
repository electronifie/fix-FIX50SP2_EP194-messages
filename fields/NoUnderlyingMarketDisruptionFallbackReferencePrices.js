var invert = require('invert-obj');

function NoUnderlyingMarketDisruptionFallbackReferencePrices (noUnderlyingMarketDisruptionFallbackReferencePrices) {
  this.message = noUnderlyingMarketDisruptionFallbackReferencePrices;
}

NoUnderlyingMarketDisruptionFallbackReferencePrices.prototype.value = function () {
  return this.message;
};

NoUnderlyingMarketDisruptionFallbackReferencePrices.Tag = '41868';

NoUnderlyingMarketDisruptionFallbackReferencePrices.Type = 'NUMINGROUP';

module.exports = NoUnderlyingMarketDisruptionFallbackReferencePrices;