var invert = require('invert-obj');

function UnderlyingPaymentStubFixedCurrency (underlyingPaymentStubFixedCurrency) {
  this.message = underlyingPaymentStubFixedCurrency;
}

UnderlyingPaymentStubFixedCurrency.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStubFixedCurrency.Tag = '40713';

UnderlyingPaymentStubFixedCurrency.Type = 'CURRENCY';

module.exports = UnderlyingPaymentStubFixedCurrency;