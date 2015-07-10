var invert = require('invert-obj');

function UnderlyingPaymentStreamCalculationLagUnit (underlyingPaymentStreamCalculationLagUnit) {
  this.message = underlyingPaymentStreamCalculationLagUnit;
}

UnderlyingPaymentStreamCalculationLagUnit.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamCalculationLagUnit.Tag = '41927';

UnderlyingPaymentStreamCalculationLagUnit.Type = 'STRING';

module.exports = UnderlyingPaymentStreamCalculationLagUnit;