var invert = require('invert-obj');

function LegMarketDisruptionFallbackType (legMarketDisruptionFallbackType) {
  this.message = legMarketDisruptionFallbackType;
}

LegMarketDisruptionFallbackType.prototype.value = function () {
  return this.message;
};

LegMarketDisruptionFallbackType.Tag = '41470';

LegMarketDisruptionFallbackType.Type = 'STRING';

module.exports = LegMarketDisruptionFallbackType;