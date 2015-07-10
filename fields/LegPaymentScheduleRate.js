var invert = require('invert-obj');

function LegPaymentScheduleRate (legPaymentScheduleRate) {
  this.message = legPaymentScheduleRate;
}

LegPaymentScheduleRate.prototype.value = function () {
  return this.message;
};

LegPaymentScheduleRate.Tag = '40383';

LegPaymentScheduleRate.Type = 'PERCENTAGE';

module.exports = LegPaymentScheduleRate;