var invert = require('invert-obj');

function MarketDisruptionFallbackBasketCurrency (marketDisruptionFallbackBasketCurrency) {
  this.message = marketDisruptionFallbackBasketCurrency;
}

MarketDisruptionFallbackBasketCurrency.prototype.value = function () {
  return this.message;
};

MarketDisruptionFallbackBasketCurrency.Tag = '41104';

MarketDisruptionFallbackBasketCurrency.Type = 'CURRENCY';

module.exports = MarketDisruptionFallbackBasketCurrency;