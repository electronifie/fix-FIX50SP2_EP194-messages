var invert = require('invert-obj');

function UnderlyingPaymentStreamInflationLagPeriod (underlyingPaymentStreamInflationLagPeriod) {
  this.message = underlyingPaymentStreamInflationLagPeriod;
}

UnderlyingPaymentStreamInflationLagPeriod.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamInflationLagPeriod.Tag = '40639';

UnderlyingPaymentStreamInflationLagPeriod.Type = 'INT';

module.exports = UnderlyingPaymentStreamInflationLagPeriod;