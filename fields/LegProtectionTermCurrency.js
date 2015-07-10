var invert = require('invert-obj');

function LegProtectionTermCurrency (legProtectionTermCurrency) {
  this.message = legProtectionTermCurrency;
}

LegProtectionTermCurrency.prototype.value = function () {
  return this.message;
};

LegProtectionTermCurrency.Tag = '41619';

LegProtectionTermCurrency.Type = 'CURRENCY';

module.exports = LegProtectionTermCurrency;