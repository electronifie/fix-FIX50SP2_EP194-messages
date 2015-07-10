var invert = require('invert-obj');

function UnderlyingProtectionTermCurrency (underlyingProtectionTermCurrency) {
  this.message = underlyingProtectionTermCurrency;
}

UnderlyingProtectionTermCurrency.prototype.value = function () {
  return this.message;
};

UnderlyingProtectionTermCurrency.Tag = '42070';

UnderlyingProtectionTermCurrency.Type = 'CURRENCY';

module.exports = UnderlyingProtectionTermCurrency;