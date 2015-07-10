var invert = require('invert-obj');

function NoProtectionTermObligations (noProtectionTermObligations) {
  this.message = noProtectionTermObligations;
}

NoProtectionTermObligations.prototype.value = function () {
  return this.message;
};

NoProtectionTermObligations.Tag = '40201';

NoProtectionTermObligations.Type = 'NUMINGROUP';

module.exports = NoProtectionTermObligations;