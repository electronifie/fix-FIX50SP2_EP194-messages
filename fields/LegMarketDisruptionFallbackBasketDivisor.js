var invert = require('invert-obj');

function LegMarketDisruptionFallbackBasketDivisor (legMarketDisruptionFallbackBasketDivisor) {
  this.message = legMarketDisruptionFallbackBasketDivisor;
}

LegMarketDisruptionFallbackBasketDivisor.prototype.value = function () {
  return this.message;
};

LegMarketDisruptionFallbackBasketDivisor.Tag = '41480';

LegMarketDisruptionFallbackBasketDivisor.Type = 'FLOAT';

module.exports = LegMarketDisruptionFallbackBasketDivisor;