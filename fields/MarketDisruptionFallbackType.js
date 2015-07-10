var invert = require('invert-obj');

function MarketDisruptionFallbackType (marketDisruptionFallbackType) {
  this.message = marketDisruptionFallbackType;
}

MarketDisruptionFallbackType.prototype.value = function () {
  return this.message;
};

MarketDisruptionFallbackType.Tag = '41095';

MarketDisruptionFallbackType.Type = 'STRING';

module.exports = MarketDisruptionFallbackType;