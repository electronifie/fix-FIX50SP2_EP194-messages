var invert = require('invert-obj');

function UnderlyingPaymentStreamCalculationLagPeriod (underlyingPaymentStreamCalculationLagPeriod) {
  this.message = underlyingPaymentStreamCalculationLagPeriod;
}

UnderlyingPaymentStreamCalculationLagPeriod.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamCalculationLagPeriod.Tag = '41926';

UnderlyingPaymentStreamCalculationLagPeriod.Type = 'INT';

module.exports = UnderlyingPaymentStreamCalculationLagPeriod;