var invert = require('invert-obj');

function MarketDisruptionFallbackBasketDivisor (marketDisruptionFallbackBasketDivisor) {
  this.message = marketDisruptionFallbackBasketDivisor;
}

MarketDisruptionFallbackBasketDivisor.prototype.value = function () {
  return this.message;
};

MarketDisruptionFallbackBasketDivisor.Tag = '41105';

MarketDisruptionFallbackBasketDivisor.Type = 'FLOAT';

module.exports = MarketDisruptionFallbackBasketDivisor;