var invert = require('invert-obj');

function UnderlyingProtectionTermEventNewsSource (underlyingProtectionTermEventNewsSource) {
  this.message = underlyingProtectionTermEventNewsSource;
}

UnderlyingProtectionTermEventNewsSource.prototype.value = function () {
  return this.message;
};

UnderlyingProtectionTermEventNewsSource.Tag = '42091';

UnderlyingProtectionTermEventNewsSource.Type = 'STRING';

module.exports = UnderlyingProtectionTermEventNewsSource;