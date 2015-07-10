var invert = require('invert-obj');

function NoLegMarketDisruptionFallbacks (noLegMarketDisruptionFallbacks) {
  this.message = noLegMarketDisruptionFallbacks;
}

NoLegMarketDisruptionFallbacks.prototype.value = function () {
  return this.message;
};

NoLegMarketDisruptionFallbacks.Tag = '41469';

NoLegMarketDisruptionFallbacks.Type = 'NUMINGROUP';

module.exports = NoLegMarketDisruptionFallbacks;