var invert = require('invert-obj');

function UnderlyingPaymentStreamInflationInterpolationMethod (underlyingPaymentStreamInflationInterpolationMethod) {
  this.message = underlyingPaymentStreamInflationInterpolationMethod;
}

UnderlyingPaymentStreamInflationInterpolationMethod.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamInflationInterpolationMethod.Tag = '40642';

UnderlyingPaymentStreamInflationInterpolationMethod.Type = 'INT';

module.exports = UnderlyingPaymentStreamInflationInterpolationMethod;