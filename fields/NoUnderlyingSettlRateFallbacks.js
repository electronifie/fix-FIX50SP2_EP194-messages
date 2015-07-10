var invert = require('invert-obj');

function NoUnderlyingSettlRateFallbacks (noUnderlyingSettlRateFallbacks) {
  this.message = noUnderlyingSettlRateFallbacks;
}

NoUnderlyingSettlRateFallbacks.prototype.value = function () {
  return this.message;
};

NoUnderlyingSettlRateFallbacks.Tag = '40659';

NoUnderlyingSettlRateFallbacks.Type = 'NUMINGROUP';

module.exports = NoUnderlyingSettlRateFallbacks;