var invert = require('invert-obj');

function UnderlyingPaymentStreamCompoundingMethod (underlyingPaymentStreamCompoundingMethod) {
  this.message = underlyingPaymentStreamCompoundingMethod;
}

UnderlyingPaymentStreamCompoundingMethod.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamCompoundingMethod.Tag = '40577';

UnderlyingPaymentStreamCompoundingMethod.Type = 'INT';

module.exports = UnderlyingPaymentStreamCompoundingMethod;