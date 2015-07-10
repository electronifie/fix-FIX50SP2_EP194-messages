var invert = require('invert-obj');

function ProtectionTermEventType (protectionTermEventType) {
  this.message = protectionTermEventType;
}

ProtectionTermEventType.prototype.value = function () {
  return this.message;
};

ProtectionTermEventType.Tag = '40192';

ProtectionTermEventType.Type = 'STRING';

module.exports = ProtectionTermEventType;