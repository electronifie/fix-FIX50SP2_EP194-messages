var invert = require('invert-obj');

function LegPaymentScheduleFixingLagPeriod (legPaymentScheduleFixingLagPeriod) {
  this.message = legPaymentScheduleFixingLagPeriod;
}

LegPaymentScheduleFixingLagPeriod.prototype.value = function () {
  return this.message;
};

LegPaymentScheduleFixingLagPeriod.Tag = '41545';

LegPaymentScheduleFixingLagPeriod.Type = 'INT';

module.exports = LegPaymentScheduleFixingLagPeriod;