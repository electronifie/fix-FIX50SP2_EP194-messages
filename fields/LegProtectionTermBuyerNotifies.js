var invert = require('invert-obj');

function LegProtectionTermBuyerNotifies (legProtectionTermBuyerNotifies) {
  this.message = legProtectionTermBuyerNotifies;
}

LegProtectionTermBuyerNotifies.prototype.value = function () {
  return this.message;
};

LegProtectionTermBuyerNotifies.Tag = '41621';

LegProtectionTermBuyerNotifies.Type = 'BOOLEAN';

module.exports = LegProtectionTermBuyerNotifies;