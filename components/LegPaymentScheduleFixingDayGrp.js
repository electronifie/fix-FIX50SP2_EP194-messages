var NoLegPaymentScheduleFixingDays = require('../fields/NoLegPaymentScheduleFixingDays');
var LegPaymentScheduleFixingDayOfWeek = require('../fields/LegPaymentScheduleFixingDayOfWeek');
var LegPaymentScheduleFixingDayNumber = require('../fields/LegPaymentScheduleFixingDayNumber');

function LegPaymentScheduleFixingDayGrp (legPaymentScheduleFixingDayGrp) {
  this.message = legPaymentScheduleFixingDayGrp;
}

/* group */

/* field */
LegPaymentScheduleFixingDayGrp.prototype.legPaymentScheduleFixingDayOfWeek = function () {
  return new LegPaymentScheduleFixingDayOfWeek(this.message.tags[LegPaymentScheduleFixingDayOfWeek.Tag]);
};

/* field */
LegPaymentScheduleFixingDayGrp.prototype.legPaymentScheduleFixingDayNumber = function () {
  return new LegPaymentScheduleFixingDayNumber(this.message.tags[LegPaymentScheduleFixingDayNumber.Tag]);
};

/* end group */

LegPaymentScheduleFixingDayGrp.Tag = '41530';

module.exports = LegPaymentScheduleFixingDayGrp;