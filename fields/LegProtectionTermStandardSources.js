var invert = require('invert-obj');

function LegProtectionTermStandardSources (legProtectionTermStandardSources) {
  this.message = legProtectionTermStandardSources;
}

LegProtectionTermStandardSources.prototype.value = function () {
  return this.message;
};

LegProtectionTermStandardSources.Tag = '41623';

LegProtectionTermStandardSources.Type = 'BOOLEAN';

module.exports = LegProtectionTermStandardSources;