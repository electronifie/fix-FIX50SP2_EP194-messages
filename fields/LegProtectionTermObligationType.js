var invert = require('invert-obj');

function LegProtectionTermObligationType (legProtectionTermObligationType) {
  this.message = legProtectionTermObligationType;
}

LegProtectionTermObligationType.prototype.value = function () {
  return this.message;
};

LegProtectionTermObligationType.Tag = '41636';

LegProtectionTermObligationType.Type = 'STRING';

module.exports = LegProtectionTermObligationType;