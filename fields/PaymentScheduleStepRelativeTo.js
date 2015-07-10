var invert = require('invert-obj');

function PaymentScheduleStepRelativeTo (paymentScheduleStepRelativeTo) {
  this.message = paymentScheduleStepRelativeTo;
}

PaymentScheduleStepRelativeTo.prototype.value = function () {
  return this.message;
};


PaymentScheduleStepRelativeTo.Keys = {
  INITIAL: '0',
  PREVIOUS: '1',
};

PaymentScheduleStepRelativeTo.Tag = '40849';

PaymentScheduleStepRelativeTo.Type = 'INT';

PaymentScheduleStepRelativeTo.Values = invert(PaymentScheduleStepRelativeTo.Keys);

module.exports = PaymentScheduleStepRelativeTo;