var invert = require('invert-obj');

function NoProtectionTerms (noProtectionTerms) {
  this.message = noProtectionTerms;
}

NoProtectionTerms.prototype.value = function () {
  return this.message;
};

NoProtectionTerms.Tag = '40181';

NoProtectionTerms.Type = 'NUMINGROUP';

module.exports = NoProtectionTerms;