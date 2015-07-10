var invert = require('invert-obj');

function ProtectionTermSellerNotifies (protectionTermSellerNotifies) {
  this.message = protectionTermSellerNotifies;
}

ProtectionTermSellerNotifies.prototype.value = function () {
  return this.message;
};

ProtectionTermSellerNotifies.Tag = '40184';

ProtectionTermSellerNotifies.Type = 'BOOLEAN';

module.exports = ProtectionTermSellerNotifies;