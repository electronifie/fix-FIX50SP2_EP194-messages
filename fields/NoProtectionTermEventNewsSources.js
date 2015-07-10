var invert = require('invert-obj');

function NoProtectionTermEventNewsSources (noProtectionTermEventNewsSources) {
  this.message = noProtectionTermEventNewsSources;
}

NoProtectionTermEventNewsSources.prototype.value = function () {
  return this.message;
};

NoProtectionTermEventNewsSources.Tag = '40951';

NoProtectionTermEventNewsSources.Type = 'NUMINGROUP';

module.exports = NoProtectionTermEventNewsSources;