var invert = require('invert-obj');

function PaymentStreamFinalRatePrecision (paymentStreamFinalRatePrecision) {
  this.message = paymentStreamFinalRatePrecision;
}

PaymentStreamFinalRatePrecision.prototype.value = function () {
  return this.message;
};

PaymentStreamFinalRatePrecision.Tag = '40805';

PaymentStreamFinalRatePrecision.Type = 'INT';

module.exports = PaymentStreamFinalRatePrecision;