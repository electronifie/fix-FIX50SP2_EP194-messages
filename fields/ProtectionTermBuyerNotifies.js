var invert = require('invert-obj');

function ProtectionTermBuyerNotifies (protectionTermBuyerNotifies) {
  this.message = protectionTermBuyerNotifies;
}

ProtectionTermBuyerNotifies.prototype.value = function () {
  return this.message;
};

ProtectionTermBuyerNotifies.Tag = '40185';

ProtectionTermBuyerNotifies.Type = 'BOOLEAN';

module.exports = ProtectionTermBuyerNotifies;