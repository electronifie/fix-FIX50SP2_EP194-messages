var invert = require('invert-obj');

function LegProtectionTermEventDayType (legProtectionTermEventDayType) {
  this.message = legProtectionTermEventDayType;
}

LegProtectionTermEventDayType.prototype.value = function () {
  return this.message;
};

LegProtectionTermEventDayType.Tag = '41631';

LegProtectionTermEventDayType.Type = 'INT';

module.exports = LegProtectionTermEventDayType;