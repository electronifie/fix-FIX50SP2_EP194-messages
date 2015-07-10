var invert = require('invert-obj');

function UnderlyingMarketDisruptionFallbackBasketDivisor (underlyingMarketDisruptionFallbackBasketDivisor) {
  this.message = underlyingMarketDisruptionFallbackBasketDivisor;
}

UnderlyingMarketDisruptionFallbackBasketDivisor.prototype.value = function () {
  return this.message;
};

UnderlyingMarketDisruptionFallbackBasketDivisor.Tag = '41877';

UnderlyingMarketDisruptionFallbackBasketDivisor.Type = 'FLOAT';

module.exports = UnderlyingMarketDisruptionFallbackBasketDivisor;