var invert = require('invert-obj');

function LegPaymentScheduleRateSpreadPositionType (legPaymentScheduleRateSpreadPositionType) {
  this.message = legPaymentScheduleRateSpreadPositionType;
}

LegPaymentScheduleRateSpreadPositionType.prototype.value = function () {
  return this.message;
};

LegPaymentScheduleRateSpreadPositionType.Tag = '40386';

LegPaymentScheduleRateSpreadPositionType.Type = 'INT';

module.exports = LegPaymentScheduleRateSpreadPositionType;