var invert = require('invert-obj');

function LegProtectionTermEventUnit (legProtectionTermEventUnit) {
  this.message = legProtectionTermEventUnit;
}

LegProtectionTermEventUnit.prototype.value = function () {
  return this.message;
};

LegProtectionTermEventUnit.Tag = '41630';

LegProtectionTermEventUnit.Type = 'STRING';

module.exports = LegProtectionTermEventUnit;