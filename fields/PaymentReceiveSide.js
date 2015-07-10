var invert = require('invert-obj');

function PaymentReceiveSide (paymentReceiveSide) {
  this.message = paymentReceiveSide;
}

PaymentReceiveSide.prototype.value = function () {
  return this.message;
};

PaymentReceiveSide.Tag = '40215';

PaymentReceiveSide.Type = 'INT';

module.exports = PaymentReceiveSide;