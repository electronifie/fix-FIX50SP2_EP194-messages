var invert = require('invert-obj');

function LegPaymentScheduleRateMultiplier (legPaymentScheduleRateMultiplier) {
  this.message = legPaymentScheduleRateMultiplier;
}

LegPaymentScheduleRateMultiplier.prototype.value = function () {
  return this.message;
};

LegPaymentScheduleRateMultiplier.Tag = '40384';

LegPaymentScheduleRateMultiplier.Type = 'FLOAT';

module.exports = LegPaymentScheduleRateMultiplier;