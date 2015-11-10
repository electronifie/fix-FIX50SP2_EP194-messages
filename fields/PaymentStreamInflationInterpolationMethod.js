var invert = require('invert-obj');

function PaymentStreamInflationInterpolationMethod (paymentStreamInflationInterpolationMethod) {
  this.message = paymentStreamInflationInterpolationMethod;
}

PaymentStreamInflationInterpolationMethod.prototype.value = function () {
  return this.message;
};


PaymentStreamInflationInterpolationMethod.Keys = {
  'NONE': '0',
  'LINEAR_ZERO_YIELD': '1',
};

PaymentStreamInflationInterpolationMethod.Tag = '40811';

PaymentStreamInflationInterpolationMethod.Type = 'INT';

PaymentStreamInflationInterpolationMethod.Values = invert(PaymentStreamInflationInterpolationMethod.Keys);

module.exports = PaymentStreamInflationInterpolationMethod;