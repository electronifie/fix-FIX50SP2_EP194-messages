var invert = require('invert-obj');

function MarketDisruptionFallbackValue (marketDisruptionFallbackValue) {
  this.message = marketDisruptionFallbackValue;
}

MarketDisruptionFallbackValue.prototype.value = function () {
  return this.message;
};

MarketDisruptionFallbackValue.Tag = '40992';

MarketDisruptionFallbackValue.Type = 'STRING';

module.exports = MarketDisruptionFallbackValue;