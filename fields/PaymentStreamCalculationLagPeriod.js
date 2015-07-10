var invert = require('invert-obj');

function PaymentStreamCalculationLagPeriod (paymentStreamCalculationLagPeriod) {
  this.message = paymentStreamCalculationLagPeriod;
}

PaymentStreamCalculationLagPeriod.prototype.value = function () {
  return this.message;
};

PaymentStreamCalculationLagPeriod.Tag = '41209';

PaymentStreamCalculationLagPeriod.Type = 'INT';

module.exports = PaymentStreamCalculationLagPeriod;