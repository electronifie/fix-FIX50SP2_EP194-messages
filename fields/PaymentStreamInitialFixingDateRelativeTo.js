var invert = require('invert-obj');

function PaymentStreamInitialFixingDateRelativeTo (paymentStreamInitialFixingDateRelativeTo) {
  this.message = paymentStreamInitialFixingDateRelativeTo;
}

PaymentStreamInitialFixingDateRelativeTo.prototype.value = function () {
  return this.message;
};

PaymentStreamInitialFixingDateRelativeTo.Tag = '40767';

PaymentStreamInitialFixingDateRelativeTo.Type = 'INT';

module.exports = PaymentStreamInitialFixingDateRelativeTo;