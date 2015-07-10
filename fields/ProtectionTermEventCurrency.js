var invert = require('invert-obj');

function ProtectionTermEventCurrency (protectionTermEventCurrency) {
  this.message = protectionTermEventCurrency;
}

ProtectionTermEventCurrency.prototype.value = function () {
  return this.message;
};

ProtectionTermEventCurrency.Tag = '40194';

ProtectionTermEventCurrency.Type = 'CURRENCY';

module.exports = ProtectionTermEventCurrency;