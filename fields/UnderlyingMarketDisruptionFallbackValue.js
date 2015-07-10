var invert = require('invert-obj');

function UnderlyingMarketDisruptionFallbackValue (underlyingMarketDisruptionFallbackValue) {
  this.message = underlyingMarketDisruptionFallbackValue;
}

UnderlyingMarketDisruptionFallbackValue.prototype.value = function () {
  return this.message;
};

UnderlyingMarketDisruptionFallbackValue.Tag = '41339';

UnderlyingMarketDisruptionFallbackValue.Type = 'STRING';

module.exports = UnderlyingMarketDisruptionFallbackValue;