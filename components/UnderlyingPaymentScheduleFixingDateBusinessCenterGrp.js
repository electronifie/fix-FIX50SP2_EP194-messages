var NoUnderlyingPaymentScheduleFixingDateBusinessCenters = require('../fields/NoUnderlyingPaymentScheduleFixingDateBusinessCenters');
var UnderlyingPaymentScheduleFixingDateBusinessCenter = require('../fields/UnderlyingPaymentScheduleFixingDateBusinessCenter');

function UnderlyingPaymentScheduleFixingDateBusinessCenterGrp (underlyingPaymentScheduleFixingDateBusinessCenterGrp) {
  this.message = underlyingPaymentScheduleFixingDateBusinessCenterGrp;
}

/* group */

/* field */
UnderlyingPaymentScheduleFixingDateBusinessCenterGrp.prototype.underlyingPaymentScheduleFixingDateBusinessCenter = function () {
  return new UnderlyingPaymentScheduleFixingDateBusinessCenter(this.message.tags[UnderlyingPaymentScheduleFixingDateBusinessCenter.Tag]);
};

/* end group */

UnderlyingPaymentScheduleFixingDateBusinessCenterGrp.Tag = '40966';

module.exports = UnderlyingPaymentScheduleFixingDateBusinessCenterGrp;