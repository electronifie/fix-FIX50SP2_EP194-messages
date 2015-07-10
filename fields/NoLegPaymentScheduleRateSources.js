var invert = require('invert-obj');

function NoLegPaymentScheduleRateSources (noLegPaymentScheduleRateSources) {
  this.message = noLegPaymentScheduleRateSources;
}

NoLegPaymentScheduleRateSources.prototype.value = function () {
  return this.message;
};

NoLegPaymentScheduleRateSources.Tag = '40414';

NoLegPaymentScheduleRateSources.Type = 'NUMINGROUP';

module.exports = NoLegPaymentScheduleRateSources;