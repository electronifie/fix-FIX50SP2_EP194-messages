var invert = require('invert-obj');

function ProtectionTermEventPeriod (protectionTermEventPeriod) {
  this.message = protectionTermEventPeriod;
}

ProtectionTermEventPeriod.prototype.value = function () {
  return this.message;
};

ProtectionTermEventPeriod.Tag = '40195';

ProtectionTermEventPeriod.Type = 'INT';

module.exports = ProtectionTermEventPeriod;