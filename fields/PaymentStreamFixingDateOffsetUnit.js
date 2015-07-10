var invert = require('invert-obj');

function PaymentStreamFixingDateOffsetUnit (paymentStreamFixingDateOffsetUnit) {
  this.message = paymentStreamFixingDateOffsetUnit;
}

PaymentStreamFixingDateOffsetUnit.prototype.value = function () {
  return this.message;
};

PaymentStreamFixingDateOffsetUnit.Tag = '40778';

PaymentStreamFixingDateOffsetUnit.Type = 'STRING';

module.exports = PaymentStreamFixingDateOffsetUnit;