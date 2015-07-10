var invert = require('invert-obj');

function NoUnderlyingProtectionTermObligations (noUnderlyingProtectionTermObligations) {
  this.message = noUnderlyingProtectionTermObligations;
}

NoUnderlyingProtectionTermObligations.prototype.value = function () {
  return this.message;
};

NoUnderlyingProtectionTermObligations.Tag = '42087';

NoUnderlyingProtectionTermObligations.Type = 'NUMINGROUP';

module.exports = NoUnderlyingProtectionTermObligations;