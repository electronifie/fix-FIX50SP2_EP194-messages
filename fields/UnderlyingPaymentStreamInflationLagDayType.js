var invert = require('invert-obj');

function UnderlyingPaymentStreamInflationLagDayType (underlyingPaymentStreamInflationLagDayType) {
  this.message = underlyingPaymentStreamInflationLagDayType;
}

UnderlyingPaymentStreamInflationLagDayType.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamInflationLagDayType.Tag = '40641';

UnderlyingPaymentStreamInflationLagDayType.Type = 'INT';

module.exports = UnderlyingPaymentStreamInflationLagDayType;