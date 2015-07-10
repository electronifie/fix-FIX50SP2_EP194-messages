var invert = require('invert-obj');

function NoMarketDisruptionFallbacks (noMarketDisruptionFallbacks) {
  this.message = noMarketDisruptionFallbacks;
}

NoMarketDisruptionFallbacks.prototype.value = function () {
  return this.message;
};

NoMarketDisruptionFallbacks.Tag = '41094';

NoMarketDisruptionFallbacks.Type = 'NUMINGROUP';

module.exports = NoMarketDisruptionFallbacks;