var invert = require('invert-obj');

function NoUnderlyingProtectionTermEvents (noUnderlyingProtectionTermEvents) {
  this.message = noUnderlyingProtectionTermEvents;
}

NoUnderlyingProtectionTermEvents.prototype.value = function () {
  return this.message;
};

NoUnderlyingProtectionTermEvents.Tag = '42077';

NoUnderlyingProtectionTermEvents.Type = 'NUMINGROUP';

module.exports = NoUnderlyingProtectionTermEvents;