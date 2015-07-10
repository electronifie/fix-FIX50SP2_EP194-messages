var invert = require('invert-obj');

function UnderlyingProtectionTermBuyerNotifies (underlyingProtectionTermBuyerNotifies) {
  this.message = underlyingProtectionTermBuyerNotifies;
}

UnderlyingProtectionTermBuyerNotifies.prototype.value = function () {
  return this.message;
};

UnderlyingProtectionTermBuyerNotifies.Tag = '42072';

UnderlyingProtectionTermBuyerNotifies.Type = 'BOOLEAN';

module.exports = UnderlyingProtectionTermBuyerNotifies;