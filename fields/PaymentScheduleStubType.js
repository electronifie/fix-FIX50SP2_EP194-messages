var invert = require('invert-obj');

function PaymentScheduleStubType (paymentScheduleStubType) {
  this.message = paymentScheduleStubType;
}

PaymentScheduleStubType.prototype.value = function () {
  return this.message;
};

PaymentScheduleStubType.Tag = '40830';

PaymentScheduleStubType.Type = 'INT';

module.exports = PaymentScheduleStubType;