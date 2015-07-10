var invert = require('invert-obj');

function PaymentStreamTotalFixedAmount (paymentStreamTotalFixedAmount) {
  this.message = paymentStreamTotalFixedAmount;
}

PaymentStreamTotalFixedAmount.prototype.value = function () {
  return this.message;
};

PaymentStreamTotalFixedAmount.Tag = '41188';

PaymentStreamTotalFixedAmount.Type = 'AMT';

module.exports = PaymentStreamTotalFixedAmount;