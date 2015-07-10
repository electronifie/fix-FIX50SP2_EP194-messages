var invert = require('invert-obj');

function LegProtectionTermEventNewsSource (legProtectionTermEventNewsSource) {
  this.message = legProtectionTermEventNewsSource;
}

LegProtectionTermEventNewsSource.prototype.value = function () {
  return this.message;
};

LegProtectionTermEventNewsSource.Tag = '41615';

LegProtectionTermEventNewsSource.Type = 'STRING';

module.exports = LegProtectionTermEventNewsSource;