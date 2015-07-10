var invert = require('invert-obj');

function LegPaymentScheduleRateSpreadType (legPaymentScheduleRateSpreadType) {
  this.message = legPaymentScheduleRateSpreadType;
}

LegPaymentScheduleRateSpreadType.prototype.value = function () {
  return this.message;
};

LegPaymentScheduleRateSpreadType.Tag = '41538';

LegPaymentScheduleRateSpreadType.Type = 'INT';

module.exports = LegPaymentScheduleRateSpreadType;