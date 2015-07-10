var invert = require('invert-obj');

function UnderlyingProtectionTermObligationValue (underlyingProtectionTermObligationValue) {
  this.message = underlyingProtectionTermObligationValue;
}

UnderlyingProtectionTermObligationValue.prototype.value = function () {
  return this.message;
};

UnderlyingProtectionTermObligationValue.Tag = '42089';

UnderlyingProtectionTermObligationValue.Type = 'STRING';

module.exports = UnderlyingProtectionTermObligationValue;