var invert = require('invert-obj');

function ProtectionTermEventValue (protectionTermEventValue) {
  this.message = protectionTermEventValue;
}

ProtectionTermEventValue.prototype.value = function () {
  return this.message;
};

ProtectionTermEventValue.Tag = '40193';

ProtectionTermEventValue.Type = 'STRING';

module.exports = ProtectionTermEventValue;