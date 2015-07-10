var invert = require('invert-obj');

function LegMarketDisruptionFallbackOpenUnits (legMarketDisruptionFallbackOpenUnits) {
  this.message = legMarketDisruptionFallbackOpenUnits;
}

LegMarketDisruptionFallbackOpenUnits.prototype.value = function () {
  return this.message;
};

LegMarketDisruptionFallbackOpenUnits.Tag = '41478';

LegMarketDisruptionFallbackOpenUnits.Type = 'QTY';

module.exports = LegMarketDisruptionFallbackOpenUnits;