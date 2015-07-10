var NoPaymentScheduleFixingDateBusinessCenters = require('../fields/NoPaymentScheduleFixingDateBusinessCenters');
var PaymentScheduleFixingDateBusinessCenter = require('../fields/PaymentScheduleFixingDateBusinessCenter');

function PaymentScheduleFixingDateBusinessCenterGrp (paymentScheduleFixingDateBusinessCenterGrp) {
  this.message = paymentScheduleFixingDateBusinessCenterGrp;
}

/* group */

/* field */
PaymentScheduleFixingDateBusinessCenterGrp.prototype.paymentScheduleFixingDateBusinessCenter = function () {
  return new PaymentScheduleFixingDateBusinessCenter(this.message.tags[PaymentScheduleFixingDateBusinessCenter.Tag]);
};

/* end group */

PaymentScheduleFixingDateBusinessCenterGrp.Tag = '40977';

module.exports = PaymentScheduleFixingDateBusinessCenterGrp;