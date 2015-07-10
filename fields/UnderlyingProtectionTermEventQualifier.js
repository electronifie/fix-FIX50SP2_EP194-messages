var invert = require('invert-obj');

function UnderlyingProtectionTermEventQualifier (underlyingProtectionTermEventQualifier) {
  this.message = underlyingProtectionTermEventQualifier;
}

UnderlyingProtectionTermEventQualifier.prototype.value = function () {
  return this.message;
};

UnderlyingProtectionTermEventQualifier.Tag = '42086';

UnderlyingProtectionTermEventQualifier.Type = 'CHAR';

module.exports = UnderlyingProtectionTermEventQualifier;