var invert = require('invert-obj');

function LegMarketDisruptionFallbackBasketCurrency (legMarketDisruptionFallbackBasketCurrency) {
  this.message = legMarketDisruptionFallbackBasketCurrency;
}

LegMarketDisruptionFallbackBasketCurrency.prototype.value = function () {
  return this.message;
};

LegMarketDisruptionFallbackBasketCurrency.Tag = '41479';

LegMarketDisruptionFallbackBasketCurrency.Type = 'CURRENCY';

module.exports = LegMarketDisruptionFallbackBasketCurrency;