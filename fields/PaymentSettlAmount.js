var invert = require('invert-obj');

function PaymentSettlAmount (paymentSettlAmount) {
  this.message = paymentSettlAmount;
}

PaymentSettlAmount.prototype.value = function () {
  return this.message;
};

PaymentSettlAmount.Tag = '40231';

PaymentSettlAmount.Type = 'AMT';

module.exports = PaymentSettlAmount;