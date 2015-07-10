var invert = require('invert-obj');

function NoUnderlyingMarketDisruptionFallbacks (noUnderlyingMarketDisruptionFallbacks) {
  this.message = noUnderlyingMarketDisruptionFallbacks;
}

NoUnderlyingMarketDisruptionFallbacks.prototype.value = function () {
  return this.message;
};

NoUnderlyingMarketDisruptionFallbacks.Tag = '41866';

NoUnderlyingMarketDisruptionFallbacks.Type = 'NUMINGROUP';

module.exports = NoUnderlyingMarketDisruptionFallbacks;