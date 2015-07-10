var invert = require('invert-obj');

function ComplexOptPayoutCurrency (complexOptPayoutCurrency) {
  this.message = complexOptPayoutCurrency;
}

ComplexOptPayoutCurrency.prototype.value = function () {
  return this.message;
};

ComplexOptPayoutCurrency.Tag = '2122';

ComplexOptPayoutCurrency.Type = 'CURRENCY';

module.exports = ComplexOptPayoutCurrency;