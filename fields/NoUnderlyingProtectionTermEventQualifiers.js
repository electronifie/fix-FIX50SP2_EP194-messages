var invert = require('invert-obj');

function NoUnderlyingProtectionTermEventQualifiers (noUnderlyingProtectionTermEventQualifiers) {
  this.message = noUnderlyingProtectionTermEventQualifiers;
}

NoUnderlyingProtectionTermEventQualifiers.prototype.value = function () {
  return this.message;
};

NoUnderlyingProtectionTermEventQualifiers.Tag = '42085';

NoUnderlyingProtectionTermEventQualifiers.Type = 'NUMINGROUP';

module.exports = NoUnderlyingProtectionTermEventQualifiers;