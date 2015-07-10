var invert = require('invert-obj');

function PaymentScheduleReceiveSide (paymentScheduleReceiveSide) {
  this.message = paymentScheduleReceiveSide;
}

PaymentScheduleReceiveSide.prototype.value = function () {
  return this.message;
};

PaymentScheduleReceiveSide.Tag = '40834';

PaymentScheduleReceiveSide.Type = 'INT';

module.exports = PaymentScheduleReceiveSide;