var invert = require('invert-obj');

function NoUnderlyingProtectionTerms (noUnderlyingProtectionTerms) {
  this.message = noUnderlyingProtectionTerms;
}

NoUnderlyingProtectionTerms.prototype.value = function () {
  return this.message;
};

NoUnderlyingProtectionTerms.Tag = '42068';

NoUnderlyingProtectionTerms.Type = 'NUMINGROUP';

module.exports = NoUnderlyingProtectionTerms;