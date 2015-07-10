var invert = require('invert-obj');

function NoProtectionTermEvents (noProtectionTermEvents) {
  this.message = noProtectionTermEvents;
}

NoProtectionTermEvents.prototype.value = function () {
  return this.message;
};

NoProtectionTermEvents.Tag = '40191';

NoProtectionTermEvents.Type = 'NUMINGROUP';

module.exports = NoProtectionTermEvents;