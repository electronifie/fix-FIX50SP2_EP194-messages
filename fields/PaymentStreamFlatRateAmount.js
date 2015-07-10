var invert = require('invert-obj');

function PaymentStreamFlatRateAmount (paymentStreamFlatRateAmount) {
  this.message = paymentStreamFlatRateAmount;
}

PaymentStreamFlatRateAmount.prototype.value = function () {
  return this.message;
};

PaymentStreamFlatRateAmount.Tag = '41181';

PaymentStreamFlatRateAmount.Type = 'AMT';

module.exports = PaymentStreamFlatRateAmount;