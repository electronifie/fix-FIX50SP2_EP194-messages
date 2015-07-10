var invert = require('invert-obj');

function LegProtectionTermEventPeriod (legProtectionTermEventPeriod) {
  this.message = legProtectionTermEventPeriod;
}

LegProtectionTermEventPeriod.prototype.value = function () {
  return this.message;
};

LegProtectionTermEventPeriod.Tag = '41629';

LegProtectionTermEventPeriod.Type = 'INT';

module.exports = LegProtectionTermEventPeriod;