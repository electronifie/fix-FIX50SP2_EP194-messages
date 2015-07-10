var invert = require('invert-obj');

function LegProtectionTermNotional (legProtectionTermNotional) {
  this.message = legProtectionTermNotional;
}

LegProtectionTermNotional.prototype.value = function () {
  return this.message;
};

LegProtectionTermNotional.Tag = '41618';

LegProtectionTermNotional.Type = 'AMT';

module.exports = LegProtectionTermNotional;