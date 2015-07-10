var invert = require('invert-obj');

function UnderlyingProtectionTermStandardSources (underlyingProtectionTermStandardSources) {
  this.message = underlyingProtectionTermStandardSources;
}

UnderlyingProtectionTermStandardSources.prototype.value = function () {
  return this.message;
};

UnderlyingProtectionTermStandardSources.Tag = '42074';

UnderlyingProtectionTermStandardSources.Type = 'BOOLEAN';

module.exports = UnderlyingProtectionTermStandardSources;