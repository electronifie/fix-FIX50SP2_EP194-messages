var invert = require('invert-obj');

function PaymentDateOffsetUnit (paymentDateOffsetUnit) {
  this.message = paymentDateOffsetUnit;
}

PaymentDateOffsetUnit.prototype.value = function () {
  return this.message;
};

PaymentDateOffsetUnit.Tag = '41158';

PaymentDateOffsetUnit.Type = 'STRING';

module.exports = PaymentDateOffsetUnit;