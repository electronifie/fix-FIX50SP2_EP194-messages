var invert = require('invert-obj');

function MarketDisruptionFallbackOpenUnits (marketDisruptionFallbackOpenUnits) {
  this.message = marketDisruptionFallbackOpenUnits;
}

MarketDisruptionFallbackOpenUnits.prototype.value = function () {
  return this.message;
};

MarketDisruptionFallbackOpenUnits.Tag = '41103';

MarketDisruptionFallbackOpenUnits.Type = 'QTY';

module.exports = MarketDisruptionFallbackOpenUnits;