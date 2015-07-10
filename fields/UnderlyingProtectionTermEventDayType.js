var invert = require('invert-obj');

function UnderlyingProtectionTermEventDayType (underlyingProtectionTermEventDayType) {
  this.message = underlyingProtectionTermEventDayType;
}

UnderlyingProtectionTermEventDayType.prototype.value = function () {
  return this.message;
};

UnderlyingProtectionTermEventDayType.Tag = '42083';

UnderlyingProtectionTermEventDayType.Type = 'INT';

module.exports = UnderlyingProtectionTermEventDayType;