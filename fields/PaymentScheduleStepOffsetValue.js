var invert = require('invert-obj');

function PaymentScheduleStepOffsetValue (paymentScheduleStepOffsetValue) {
  this.message = paymentScheduleStepOffsetValue;
}

PaymentScheduleStepOffsetValue.prototype.value = function () {
  return this.message;
};

PaymentScheduleStepOffsetValue.Tag = '40846';

PaymentScheduleStepOffsetValue.Type = 'AMT';

module.exports = PaymentScheduleStepOffsetValue;