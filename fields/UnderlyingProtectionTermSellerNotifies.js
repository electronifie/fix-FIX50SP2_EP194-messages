var invert = require('invert-obj');

function UnderlyingProtectionTermSellerNotifies (underlyingProtectionTermSellerNotifies) {
  this.message = underlyingProtectionTermSellerNotifies;
}

UnderlyingProtectionTermSellerNotifies.prototype.value = function () {
  return this.message;
};

UnderlyingProtectionTermSellerNotifies.Tag = '42071';

UnderlyingProtectionTermSellerNotifies.Type = 'BOOLEAN';

module.exports = UnderlyingProtectionTermSellerNotifies;