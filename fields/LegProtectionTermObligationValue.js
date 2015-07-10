var invert = require('invert-obj');

function LegProtectionTermObligationValue (legProtectionTermObligationValue) {
  this.message = legProtectionTermObligationValue;
}

LegProtectionTermObligationValue.prototype.value = function () {
  return this.message;
};

LegProtectionTermObligationValue.Tag = '41637';

LegProtectionTermObligationValue.Type = 'STRING';

module.exports = LegProtectionTermObligationValue;