var invert = require('invert-obj');

function PaymentStreamResetDateRelativeTo (paymentStreamResetDateRelativeTo) {
  this.message = paymentStreamResetDateRelativeTo;
}

PaymentStreamResetDateRelativeTo.prototype.value = function () {
  return this.message;
};

PaymentStreamResetDateRelativeTo.Tag = '40761';

PaymentStreamResetDateRelativeTo.Type = 'INT';

module.exports = PaymentStreamResetDateRelativeTo;