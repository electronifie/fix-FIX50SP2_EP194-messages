var invert = require('invert-obj');

function NoSettlRateFallbacks (noSettlRateFallbacks) {
  this.message = noSettlRateFallbacks;
}

NoSettlRateFallbacks.prototype.value = function () {
  return this.message;
};

NoSettlRateFallbacks.Tag = '40085';

NoSettlRateFallbacks.Type = 'NUMINGROUP';

module.exports = NoSettlRateFallbacks;