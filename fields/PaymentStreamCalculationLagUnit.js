var invert = require('invert-obj');

function PaymentStreamCalculationLagUnit (paymentStreamCalculationLagUnit) {
  this.message = paymentStreamCalculationLagUnit;
}

PaymentStreamCalculationLagUnit.prototype.value = function () {
  return this.message;
};

PaymentStreamCalculationLagUnit.Tag = '41210';

PaymentStreamCalculationLagUnit.Type = 'STRING';

module.exports = PaymentStreamCalculationLagUnit;