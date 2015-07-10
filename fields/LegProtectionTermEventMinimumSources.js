var invert = require('invert-obj');

function LegProtectionTermEventMinimumSources (legProtectionTermEventMinimumSources) {
  this.message = legProtectionTermEventMinimumSources;
}

LegProtectionTermEventMinimumSources.prototype.value = function () {
  return this.message;
};

LegProtectionTermEventMinimumSources.Tag = '41624';

LegProtectionTermEventMinimumSources.Type = 'INT';

module.exports = LegProtectionTermEventMinimumSources;