var invert = require('invert-obj');

function NoLegPaymentScheduleFixingDays (noLegPaymentScheduleFixingDays) {
  this.message = noLegPaymentScheduleFixingDays;
}

NoLegPaymentScheduleFixingDays.prototype.value = function () {
  return this.message;
};

NoLegPaymentScheduleFixingDays.Tag = '41530';

NoLegPaymentScheduleFixingDays.Type = 'NUMINGROUP';

module.exports = NoLegPaymentScheduleFixingDays;