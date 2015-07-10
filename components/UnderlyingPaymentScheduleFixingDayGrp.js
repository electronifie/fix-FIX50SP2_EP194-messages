var NoUnderlyingPaymentScheduleFixingDays = require('../fields/NoUnderlyingPaymentScheduleFixingDays');
var UnderlyingPaymentScheduleFixingDayOfWeek = require('../fields/UnderlyingPaymentScheduleFixingDayOfWeek');
var UnderlyingPaymentScheduleFixingDayNumber = require('../fields/UnderlyingPaymentScheduleFixingDayNumber');

function UnderlyingPaymentScheduleFixingDayGrp (underlyingPaymentScheduleFixingDayGrp) {
  this.message = underlyingPaymentScheduleFixingDayGrp;
}

/* group */

/* field */
UnderlyingPaymentScheduleFixingDayGrp.prototype.underlyingPaymentScheduleFixingDayOfWeek = function () {
  return new UnderlyingPaymentScheduleFixingDayOfWeek(this.message.tags[UnderlyingPaymentScheduleFixingDayOfWeek.Tag]);
};

/* field */
UnderlyingPaymentScheduleFixingDayGrp.prototype.underlyingPaymentScheduleFixingDayNumber = function () {
  return new UnderlyingPaymentScheduleFixingDayNumber(this.message.tags[UnderlyingPaymentScheduleFixingDayNumber.Tag]);
};

/* end group */

UnderlyingPaymentScheduleFixingDayGrp.Tag = '41878';

module.exports = UnderlyingPaymentScheduleFixingDayGrp;