var invert = require('invert-obj');

function UnderlyingPaymentScheduleCurrency (underlyingPaymentScheduleCurrency) {
  this.message = underlyingPaymentScheduleCurrency;
}

UnderlyingPaymentScheduleCurrency.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentScheduleCurrency.Tag = '40672';

UnderlyingPaymentScheduleCurrency.Type = 'CURRENCY';

module.exports = UnderlyingPaymentScheduleCurrency;