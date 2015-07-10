var invert = require('invert-obj');

function PaymentScheduleRateSpreadType (paymentScheduleRateSpreadType) {
  this.message = paymentScheduleRateSpreadType;
}

PaymentScheduleRateSpreadType.prototype.value = function () {
  return this.message;
};

PaymentScheduleRateSpreadType.Tag = '41169';

PaymentScheduleRateSpreadType.Type = 'INT';

module.exports = PaymentScheduleRateSpreadType;