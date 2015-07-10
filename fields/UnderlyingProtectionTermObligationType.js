var invert = require('invert-obj');

function UnderlyingProtectionTermObligationType (underlyingProtectionTermObligationType) {
  this.message = underlyingProtectionTermObligationType;
}

UnderlyingProtectionTermObligationType.prototype.value = function () {
  return this.message;
};

UnderlyingProtectionTermObligationType.Tag = '42088';

UnderlyingProtectionTermObligationType.Type = 'STRING';

module.exports = UnderlyingProtectionTermObligationType;