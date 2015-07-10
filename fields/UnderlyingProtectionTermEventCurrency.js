var invert = require('invert-obj');

function UnderlyingProtectionTermEventCurrency (underlyingProtectionTermEventCurrency) {
  this.message = underlyingProtectionTermEventCurrency;
}

UnderlyingProtectionTermEventCurrency.prototype.value = function () {
  return this.message;
};

UnderlyingProtectionTermEventCurrency.Tag = '42080';

UnderlyingProtectionTermEventCurrency.Type = 'CURRENCY';

module.exports = UnderlyingProtectionTermEventCurrency;