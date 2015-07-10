var invert = require('invert-obj');

function NoUnderlyingProtectionTermEventNewsSources (noUnderlyingProtectionTermEventNewsSources) {
  this.message = noUnderlyingProtectionTermEventNewsSources;
}

NoUnderlyingProtectionTermEventNewsSources.prototype.value = function () {
  return this.message;
};

NoUnderlyingProtectionTermEventNewsSources.Tag = '42090';

NoUnderlyingProtectionTermEventNewsSources.Type = 'NUMINGROUP';

module.exports = NoUnderlyingProtectionTermEventNewsSources;