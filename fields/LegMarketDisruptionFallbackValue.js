var invert = require('invert-obj');

function LegMarketDisruptionFallbackValue (legMarketDisruptionFallbackValue) {
  this.message = legMarketDisruptionFallbackValue;
}

LegMarketDisruptionFallbackValue.prototype.value = function () {
  return this.message;
};

LegMarketDisruptionFallbackValue.Tag = '40990';

LegMarketDisruptionFallbackValue.Type = 'STRING';

module.exports = LegMarketDisruptionFallbackValue;