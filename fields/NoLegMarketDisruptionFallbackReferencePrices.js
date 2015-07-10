var invert = require('invert-obj');

function NoLegMarketDisruptionFallbackReferencePrices (noLegMarketDisruptionFallbackReferencePrices) {
  this.message = noLegMarketDisruptionFallbackReferencePrices;
}

NoLegMarketDisruptionFallbackReferencePrices.prototype.value = function () {
  return this.message;
};

NoLegMarketDisruptionFallbackReferencePrices.Tag = '41471';

NoLegMarketDisruptionFallbackReferencePrices.Type = 'NUMINGROUP';

module.exports = NoLegMarketDisruptionFallbackReferencePrices;