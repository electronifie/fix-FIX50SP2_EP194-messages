var invert = require('invert-obj');

function NoMarketDisruptionFallbackReferencePrices (noMarketDisruptionFallbackReferencePrices) {
  this.message = noMarketDisruptionFallbackReferencePrices;
}

NoMarketDisruptionFallbackReferencePrices.prototype.value = function () {
  return this.message;
};

NoMarketDisruptionFallbackReferencePrices.Tag = '41096';

NoMarketDisruptionFallbackReferencePrices.Type = 'NUMINGROUP';

module.exports = NoMarketDisruptionFallbackReferencePrices;