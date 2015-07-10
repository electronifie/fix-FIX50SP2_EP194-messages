var invert = require('invert-obj');

function LegPaymentScheduleRateTreatment (legPaymentScheduleRateTreatment) {
  this.message = legPaymentScheduleRateTreatment;
}

LegPaymentScheduleRateTreatment.prototype.value = function () {
  return this.message;
};

LegPaymentScheduleRateTreatment.Tag = '40387';

LegPaymentScheduleRateTreatment.Type = 'INT';

module.exports = LegPaymentScheduleRateTreatment;