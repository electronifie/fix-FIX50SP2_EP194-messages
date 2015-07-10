var invert = require('invert-obj');

function PaymentStreamFixingDateRelativeTo (paymentStreamFixingDateRelativeTo) {
  this.message = paymentStreamFixingDateRelativeTo;
}

PaymentStreamFixingDateRelativeTo.prototype.value = function () {
  return this.message;
};

PaymentStreamFixingDateRelativeTo.Tag = '40774';

PaymentStreamFixingDateRelativeTo.Type = 'INT';

module.exports = PaymentStreamFixingDateRelativeTo;