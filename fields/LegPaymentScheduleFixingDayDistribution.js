var invert = require('invert-obj');

function LegPaymentScheduleFixingDayDistribution (legPaymentScheduleFixingDayDistribution) {
  this.message = legPaymentScheduleFixingDayDistribution;
}

LegPaymentScheduleFixingDayDistribution.prototype.value = function () {
  return this.message;
};

LegPaymentScheduleFixingDayDistribution.Tag = '41543';

LegPaymentScheduleFixingDayDistribution.Type = 'INT';

module.exports = LegPaymentScheduleFixingDayDistribution;