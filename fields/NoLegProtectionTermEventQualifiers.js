var invert = require('invert-obj');

function NoLegProtectionTermEventQualifiers (noLegProtectionTermEventQualifiers) {
  this.message = noLegProtectionTermEventQualifiers;
}

NoLegProtectionTermEventQualifiers.prototype.value = function () {
  return this.message;
};

NoLegProtectionTermEventQualifiers.Tag = '41633';

NoLegProtectionTermEventQualifiers.Type = 'NUMINGROUP';

module.exports = NoLegProtectionTermEventQualifiers;