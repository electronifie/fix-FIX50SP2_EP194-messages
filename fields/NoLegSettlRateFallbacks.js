var invert = require('invert-obj');

function NoLegSettlRateFallbacks (noLegSettlRateFallbacks) {
  this.message = noLegSettlRateFallbacks;
}

NoLegSettlRateFallbacks.prototype.value = function () {
  return this.message;
};

NoLegSettlRateFallbacks.Tag = '40902';

NoLegSettlRateFallbacks.Type = 'NUMINGROUP';

module.exports = NoLegSettlRateFallbacks;