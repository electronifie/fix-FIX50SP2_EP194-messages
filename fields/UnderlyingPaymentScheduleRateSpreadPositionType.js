var invert = require('invert-obj');

function UnderlyingPaymentScheduleRateSpreadPositionType (underlyingPaymentScheduleRateSpreadPositionType) {
  this.message = underlyingPaymentScheduleRateSpreadPositionType;
}

UnderlyingPaymentScheduleRateSpreadPositionType.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentScheduleRateSpreadPositionType.Tag = '40676';

UnderlyingPaymentScheduleRateSpreadPositionType.Type = 'INT';

module.exports = UnderlyingPaymentScheduleRateSpreadPositionType;