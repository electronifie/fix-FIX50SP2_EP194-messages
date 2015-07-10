var invert = require('invert-obj');

function ProtectionTermObligationType (protectionTermObligationType) {
  this.message = protectionTermObligationType;
}

ProtectionTermObligationType.prototype.value = function () {
  return this.message;
};

ProtectionTermObligationType.Tag = '40202';

ProtectionTermObligationType.Type = 'STRING';

module.exports = ProtectionTermObligationType;