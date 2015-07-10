var invert = require('invert-obj');

function NoLegProtectionTermEvents (noLegProtectionTermEvents) {
  this.message = noLegProtectionTermEvents;
}

NoLegProtectionTermEvents.prototype.value = function () {
  return this.message;
};

NoLegProtectionTermEvents.Tag = '41625';

NoLegProtectionTermEvents.Type = 'NUMINGROUP';

module.exports = NoLegProtectionTermEvents;