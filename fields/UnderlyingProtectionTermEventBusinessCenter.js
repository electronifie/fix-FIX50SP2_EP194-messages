var invert = require('invert-obj');

function UnderlyingProtectionTermEventBusinessCenter (underlyingProtectionTermEventBusinessCenter) {
  this.message = underlyingProtectionTermEventBusinessCenter;
}

UnderlyingProtectionTermEventBusinessCenter.prototype.value = function () {
  return this.message;
};

UnderlyingProtectionTermEventBusinessCenter.Tag = '42073';

UnderlyingProtectionTermEventBusinessCenter.Type = 'STRING';

module.exports = UnderlyingProtectionTermEventBusinessCenter;