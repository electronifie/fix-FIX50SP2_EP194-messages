var invert = require('invert-obj');

function UnderlyingMarketDisruptionFallbackBasketCurrency (underlyingMarketDisruptionFallbackBasketCurrency) {
  this.message = underlyingMarketDisruptionFallbackBasketCurrency;
}

UnderlyingMarketDisruptionFallbackBasketCurrency.prototype.value = function () {
  return this.message;
};

UnderlyingMarketDisruptionFallbackBasketCurrency.Tag = '41876';

UnderlyingMarketDisruptionFallbackBasketCurrency.Type = 'CURRENCY';

module.exports = UnderlyingMarketDisruptionFallbackBasketCurrency;