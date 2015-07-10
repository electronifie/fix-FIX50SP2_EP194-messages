var invert = require('invert-obj');

function ProtectionTermObligationValue (protectionTermObligationValue) {
  this.message = protectionTermObligationValue;
}

ProtectionTermObligationValue.prototype.value = function () {
  return this.message;
};

ProtectionTermObligationValue.Tag = '40203';

ProtectionTermObligationValue.Type = 'STRING';

module.exports = ProtectionTermObligationValue;