var invert = require('invert-obj');

function LegProtectionTermEventCurrency (legProtectionTermEventCurrency) {
  this.message = legProtectionTermEventCurrency;
}

LegProtectionTermEventCurrency.prototype.value = function () {
  return this.message;
};

LegProtectionTermEventCurrency.Tag = '41628';

LegProtectionTermEventCurrency.Type = 'CURRENCY';

module.exports = LegProtectionTermEventCurrency;