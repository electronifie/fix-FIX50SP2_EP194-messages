var invert = require('invert-obj');

function UnderlyingProtectionTermEventPeriod (underlyingProtectionTermEventPeriod) {
  this.message = underlyingProtectionTermEventPeriod;
}

UnderlyingProtectionTermEventPeriod.prototype.value = function () {
  return this.message;
};

UnderlyingProtectionTermEventPeriod.Tag = '42081';

UnderlyingProtectionTermEventPeriod.Type = 'INT';

module.exports = UnderlyingProtectionTermEventPeriod;