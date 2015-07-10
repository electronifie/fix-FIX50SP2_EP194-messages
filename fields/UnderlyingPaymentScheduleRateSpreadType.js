var invert = require('invert-obj');

function UnderlyingPaymentScheduleRateSpreadType (underlyingPaymentScheduleRateSpreadType) {
  this.message = underlyingPaymentScheduleRateSpreadType;
}

UnderlyingPaymentScheduleRateSpreadType.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentScheduleRateSpreadType.Tag = '41886';

UnderlyingPaymentScheduleRateSpreadType.Type = 'INT';

module.exports = UnderlyingPaymentScheduleRateSpreadType;