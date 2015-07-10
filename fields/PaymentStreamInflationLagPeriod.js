var invert = require('invert-obj');

function PaymentStreamInflationLagPeriod (paymentStreamInflationLagPeriod) {
  this.message = paymentStreamInflationLagPeriod;
}

PaymentStreamInflationLagPeriod.prototype.value = function () {
  return this.message;
};

PaymentStreamInflationLagPeriod.Tag = '40808';

PaymentStreamInflationLagPeriod.Type = 'INT';

module.exports = PaymentStreamInflationLagPeriod;