var invert = require('invert-obj');

function NoLegProtectionTerms (noLegProtectionTerms) {
  this.message = noLegProtectionTerms;
}

NoLegProtectionTerms.prototype.value = function () {
  return this.message;
};

NoLegProtectionTerms.Tag = '41616';

NoLegProtectionTerms.Type = 'NUMINGROUP';

module.exports = NoLegProtectionTerms;