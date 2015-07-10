var invert = require('invert-obj');

function UnderlyingMarketDisruptionFallbackType (underlyingMarketDisruptionFallbackType) {
  this.message = underlyingMarketDisruptionFallbackType;
}

UnderlyingMarketDisruptionFallbackType.prototype.value = function () {
  return this.message;
};

UnderlyingMarketDisruptionFallbackType.Tag = '41867';

UnderlyingMarketDisruptionFallbackType.Type = 'STRING';

module.exports = UnderlyingMarketDisruptionFallbackType;