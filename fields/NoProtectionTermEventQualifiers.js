var invert = require('invert-obj');

function NoProtectionTermEventQualifiers (noProtectionTermEventQualifiers) {
  this.message = noProtectionTermEventQualifiers;
}

NoProtectionTermEventQualifiers.prototype.value = function () {
  return this.message;
};

NoProtectionTermEventQualifiers.Tag = '40199';

NoProtectionTermEventQualifiers.Type = 'NUMINGROUP';

module.exports = NoProtectionTermEventQualifiers;