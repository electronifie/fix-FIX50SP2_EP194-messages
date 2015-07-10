var invert = require('invert-obj');

function LegProtectionTermEventType (legProtectionTermEventType) {
  this.message = legProtectionTermEventType;
}

LegProtectionTermEventType.prototype.value = function () {
  return this.message;
};

LegProtectionTermEventType.Tag = '41626';

LegProtectionTermEventType.Type = 'STRING';

module.exports = LegProtectionTermEventType;