var invert = require('invert-obj');

function ProtectionTermCurrency (protectionTermCurrency) {
  this.message = protectionTermCurrency;
}

ProtectionTermCurrency.prototype.value = function () {
  return this.message;
};

ProtectionTermCurrency.Tag = '40183';

ProtectionTermCurrency.Type = 'CURRENCY';

module.exports = ProtectionTermCurrency;