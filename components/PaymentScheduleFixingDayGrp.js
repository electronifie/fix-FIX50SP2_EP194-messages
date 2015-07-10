var NoPaymentScheduleFixingDays = require('../fields/NoPaymentScheduleFixingDays');
var PaymentScheduleFixingDayOfWeek = require('../fields/PaymentScheduleFixingDayOfWeek');
var PaymentScheduleFixingDayNumber = require('../fields/PaymentScheduleFixingDayNumber');

function PaymentScheduleFixingDayGrp (paymentScheduleFixingDayGrp) {
  this.message = paymentScheduleFixingDayGrp;
}

/* group */

/* field */
PaymentScheduleFixingDayGrp.prototype.paymentScheduleFixingDayOfWeek = function () {
  return new PaymentScheduleFixingDayOfWeek(this.message.tags[PaymentScheduleFixingDayOfWeek.Tag]);
};

/* field */
PaymentScheduleFixingDayGrp.prototype.paymentScheduleFixingDayNumber = function () {
  return new PaymentScheduleFixingDayNumber(this.message.tags[PaymentScheduleFixingDayNumber.Tag]);
};

/* end group */

PaymentScheduleFixingDayGrp.Tag = '41161';

module.exports = PaymentScheduleFixingDayGrp;