var invert = require('invert-obj');

function UnderlyingProtectionTermEventValue (underlyingProtectionTermEventValue) {
  this.message = underlyingProtectionTermEventValue;
}

UnderlyingProtectionTermEventValue.prototype.value = function () {
  return this.message;
};

UnderlyingProtectionTermEventValue.Tag = '42079';

UnderlyingProtectionTermEventValue.Type = 'STRING';

module.exports = UnderlyingProtectionTermEventValue;