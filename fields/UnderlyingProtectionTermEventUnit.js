var invert = require('invert-obj');

function UnderlyingProtectionTermEventUnit (underlyingProtectionTermEventUnit) {
  this.message = underlyingProtectionTermEventUnit;
}

UnderlyingProtectionTermEventUnit.prototype.value = function () {
  return this.message;
};

UnderlyingProtectionTermEventUnit.Tag = '42082';

UnderlyingProtectionTermEventUnit.Type = 'STRING';

module.exports = UnderlyingProtectionTermEventUnit;