var invert = require('invert-obj');

function UnderlyingPaymentStreamInflationLagUnit (underlyingPaymentStreamInflationLagUnit) {
  this.message = underlyingPaymentStreamInflationLagUnit;
}

UnderlyingPaymentStreamInflationLagUnit.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamInflationLagUnit.Tag = '40640';

UnderlyingPaymentStreamInflationLagUnit.Type = 'STRING';

module.exports = UnderlyingPaymentStreamInflationLagUnit;