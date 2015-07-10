var invert = require('invert-obj');

function UnderlyingProtectionTermNotional (underlyingProtectionTermNotional) {
  this.message = underlyingProtectionTermNotional;
}

UnderlyingProtectionTermNotional.prototype.value = function () {
  return this.message;
};

UnderlyingProtectionTermNotional.Tag = '42069';

UnderlyingProtectionTermNotional.Type = 'AMT';

module.exports = UnderlyingProtectionTermNotional;