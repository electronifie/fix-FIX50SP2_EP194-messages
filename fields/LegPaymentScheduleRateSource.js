var invert = require('invert-obj');

function LegPaymentScheduleRateSource (legPaymentScheduleRateSource) {
  this.message = legPaymentScheduleRateSource;
}

LegPaymentScheduleRateSource.prototype.value = function () {
  return this.message;
};

LegPaymentScheduleRateSource.Tag = '40415';

LegPaymentScheduleRateSource.Type = 'INT';

module.exports = LegPaymentScheduleRateSource;