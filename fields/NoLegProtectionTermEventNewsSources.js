var invert = require('invert-obj');

function NoLegProtectionTermEventNewsSources (noLegProtectionTermEventNewsSources) {
  this.message = noLegProtectionTermEventNewsSources;
}

NoLegProtectionTermEventNewsSources.prototype.value = function () {
  return this.message;
};

NoLegProtectionTermEventNewsSources.Tag = '41614';

NoLegProtectionTermEventNewsSources.Type = 'NUMINGROUP';

module.exports = NoLegProtectionTermEventNewsSources;