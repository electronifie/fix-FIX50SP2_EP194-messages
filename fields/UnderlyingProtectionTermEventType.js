var invert = require('invert-obj');

function UnderlyingProtectionTermEventType (underlyingProtectionTermEventType) {
  this.message = underlyingProtectionTermEventType;
}

UnderlyingProtectionTermEventType.prototype.value = function () {
  return this.message;
};

UnderlyingProtectionTermEventType.Tag = '42078';

UnderlyingProtectionTermEventType.Type = 'STRING';

module.exports = UnderlyingProtectionTermEventType;