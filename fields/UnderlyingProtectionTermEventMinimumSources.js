var invert = require('invert-obj');

function UnderlyingProtectionTermEventMinimumSources (underlyingProtectionTermEventMinimumSources) {
  this.message = underlyingProtectionTermEventMinimumSources;
}

UnderlyingProtectionTermEventMinimumSources.prototype.value = function () {
  return this.message;
};

UnderlyingProtectionTermEventMinimumSources.Tag = '42075';

UnderlyingProtectionTermEventMinimumSources.Type = 'INT';

module.exports = UnderlyingProtectionTermEventMinimumSources;