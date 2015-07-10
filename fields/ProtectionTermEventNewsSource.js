var invert = require('invert-obj');

function ProtectionTermEventNewsSource (protectionTermEventNewsSource) {
  this.message = protectionTermEventNewsSource;
}

ProtectionTermEventNewsSource.prototype.value = function () {
  return this.message;
};

ProtectionTermEventNewsSource.Tag = '40189';

ProtectionTermEventNewsSource.Type = 'STRING';

module.exports = ProtectionTermEventNewsSource;