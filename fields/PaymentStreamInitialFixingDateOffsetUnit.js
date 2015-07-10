var invert = require('invert-obj');

function PaymentStreamInitialFixingDateOffsetUnit (paymentStreamInitialFixingDateOffsetUnit) {
  this.message = paymentStreamInitialFixingDateOffsetUnit;
}

PaymentStreamInitialFixingDateOffsetUnit.prototype.value = function () {
  return this.message;
};

PaymentStreamInitialFixingDateOffsetUnit.Tag = '40771';

PaymentStreamInitialFixingDateOffsetUnit.Type = 'STRING';

module.exports = PaymentStreamInitialFixingDateOffsetUnit;