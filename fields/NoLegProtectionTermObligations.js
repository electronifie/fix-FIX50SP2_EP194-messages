var invert = require('invert-obj');

function NoLegProtectionTermObligations (noLegProtectionTermObligations) {
  this.message = noLegProtectionTermObligations;
}

NoLegProtectionTermObligations.prototype.value = function () {
  return this.message;
};

NoLegProtectionTermObligations.Tag = '41635';

NoLegProtectionTermObligations.Type = 'NUMINGROUP';

module.exports = NoLegProtectionTermObligations;