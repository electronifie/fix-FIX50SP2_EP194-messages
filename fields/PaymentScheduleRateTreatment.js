var invert = require('invert-obj');

function PaymentScheduleRateTreatment (paymentScheduleRateTreatment) {
  this.message = paymentScheduleRateTreatment;
}

PaymentScheduleRateTreatment.prototype.value = function () {
  return this.message;
};

PaymentScheduleRateTreatment.Tag = '40841';

PaymentScheduleRateTreatment.Type = 'INT';

module.exports = PaymentScheduleRateTreatment;