var invert = require('invert-obj');

function UnderlyingPaymentStubFixedAmount (underlyingPaymentStubFixedAmount) {
  this.message = underlyingPaymentStubFixedAmount;
}

UnderlyingPaymentStubFixedAmount.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStubFixedAmount.Tag = '40712';

UnderlyingPaymentStubFixedAmount.Type = 'AMT';

module.exports = UnderlyingPaymentStubFixedAmount;