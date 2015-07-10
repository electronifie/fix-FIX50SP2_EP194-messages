var invert = require('invert-obj');

function LegProtectionTermEventQualifier (legProtectionTermEventQualifier) {
  this.message = legProtectionTermEventQualifier;
}

LegProtectionTermEventQualifier.prototype.value = function () {
  return this.message;
};

LegProtectionTermEventQualifier.Tag = '41634';

LegProtectionTermEventQualifier.Type = 'CHAR';

module.exports = LegProtectionTermEventQualifier;