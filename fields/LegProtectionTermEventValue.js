var invert = require('invert-obj');

function LegProtectionTermEventValue (legProtectionTermEventValue) {
  this.message = legProtectionTermEventValue;
}

LegProtectionTermEventValue.prototype.value = function () {
  return this.message;
};

LegProtectionTermEventValue.Tag = '41627';

LegProtectionTermEventValue.Type = 'STRING';

module.exports = LegProtectionTermEventValue;