var invert = require('invert-obj');

function PaymentScheduleNotional (paymentScheduleNotional) {
  this.message = paymentScheduleNotional;
}

PaymentScheduleNotional.prototype.value = function () {
  return this.message;
};

PaymentScheduleNotional.Tag = '40835';

PaymentScheduleNotional.Type = 'AMT';

module.exports = PaymentScheduleNotional;