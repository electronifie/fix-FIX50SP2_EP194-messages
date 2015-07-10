var invert = require('invert-obj');

function PaymentStubFixedAmount (paymentStubFixedAmount) {
  this.message = paymentStubFixedAmount;
}

PaymentStubFixedAmount.prototype.value = function () {
  return this.message;
};

PaymentStubFixedAmount.Tag = '40876';

PaymentStubFixedAmount.Type = 'AMT';

module.exports = PaymentStubFixedAmount;