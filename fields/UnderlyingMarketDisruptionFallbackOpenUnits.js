var invert = require('invert-obj');

function UnderlyingMarketDisruptionFallbackOpenUnits (underlyingMarketDisruptionFallbackOpenUnits) {
  this.message = underlyingMarketDisruptionFallbackOpenUnits;
}

UnderlyingMarketDisruptionFallbackOpenUnits.prototype.value = function () {
  return this.message;
};

UnderlyingMarketDisruptionFallbackOpenUnits.Tag = '41875';

UnderlyingMarketDisruptionFallbackOpenUnits.Type = 'QTY';

module.exports = UnderlyingMarketDisruptionFallbackOpenUnits;