var invert = require('invert-obj');

function ProtectionTermStandardSources (protectionTermStandardSources) {
  this.message = protectionTermStandardSources;
}

ProtectionTermStandardSources.prototype.value = function () {
  return this.message;
};

ProtectionTermStandardSources.Tag = '40187';

ProtectionTermStandardSources.Type = 'BOOLEAN';

module.exports = ProtectionTermStandardSources;