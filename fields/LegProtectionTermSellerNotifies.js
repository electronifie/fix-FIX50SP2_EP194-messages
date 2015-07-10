var invert = require('invert-obj');

function LegProtectionTermSellerNotifies (legProtectionTermSellerNotifies) {
  this.message = legProtectionTermSellerNotifies;
}

LegProtectionTermSellerNotifies.prototype.value = function () {
  return this.message;
};

LegProtectionTermSellerNotifies.Tag = '41620';

LegProtectionTermSellerNotifies.Type = 'BOOLEAN';

module.exports = LegProtectionTermSellerNotifies;