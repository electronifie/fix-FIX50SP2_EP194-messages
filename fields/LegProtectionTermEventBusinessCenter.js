var invert = require('invert-obj');

function LegProtectionTermEventBusinessCenter (legProtectionTermEventBusinessCenter) {
  this.message = legProtectionTermEventBusinessCenter;
}

LegProtectionTermEventBusinessCenter.prototype.value = function () {
  return this.message;
};

LegProtectionTermEventBusinessCenter.Tag = '41622';

LegProtectionTermEventBusinessCenter.Type = 'STRING';

module.exports = LegProtectionTermEventBusinessCenter;