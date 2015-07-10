var invert = require('invert-obj');

function PaymentSchedulePaySide (paymentSchedulePaySide) {
  this.message = paymentSchedulePaySide;
}

PaymentSchedulePaySide.prototype.value = function () {
  return this.message;
};

PaymentSchedulePaySide.Tag = '40833';

PaymentSchedulePaySide.Type = 'INT';

module.exports = PaymentSchedulePaySide;