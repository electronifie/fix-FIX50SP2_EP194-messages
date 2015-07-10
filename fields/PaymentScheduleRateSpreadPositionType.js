var invert = require('invert-obj');

function PaymentScheduleRateSpreadPositionType (paymentScheduleRateSpreadPositionType) {
  this.message = paymentScheduleRateSpreadPositionType;
}

PaymentScheduleRateSpreadPositionType.prototype.value = function () {
  return this.message;
};

PaymentScheduleRateSpreadPositionType.Tag = '40840';

PaymentScheduleRateSpreadPositionType.Type = 'INT';

module.exports = PaymentScheduleRateSpreadPositionType;