var invert = require('invert-obj');

function PaymentStreamCompoundingMethod (paymentStreamCompoundingMethod) {
  this.message = paymentStreamCompoundingMethod;
}

PaymentStreamCompoundingMethod.prototype.value = function () {
  return this.message;
};


PaymentStreamCompoundingMethod.Keys = {
  NONE: '0',
  FLAT: '1',
  STRAIGHT: '2',
  SPREAD_EXCLUSIVE: '3',
};

PaymentStreamCompoundingMethod.Tag = '40747';

PaymentStreamCompoundingMethod.Type = 'INT';

PaymentStreamCompoundingMethod.Values = invert(PaymentStreamCompoundingMethod.Keys);

module.exports = PaymentStreamCompoundingMethod;