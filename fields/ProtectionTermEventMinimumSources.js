var invert = require('invert-obj');

function ProtectionTermEventMinimumSources (protectionTermEventMinimumSources) {
  this.message = protectionTermEventMinimumSources;
}

ProtectionTermEventMinimumSources.prototype.value = function () {
  return this.message;
};

ProtectionTermEventMinimumSources.Tag = '40188';

ProtectionTermEventMinimumSources.Type = 'INT';

module.exports = ProtectionTermEventMinimumSources;