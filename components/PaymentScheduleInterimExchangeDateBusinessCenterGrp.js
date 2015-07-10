var NoPaymentScheduleInterimExchangeDateBusinessCenters = require('../fields/NoPaymentScheduleInterimExchangeDateBusinessCenters');
var PaymentScheduleInterimExchangeDatesBusinessCenter = require('../fields/PaymentScheduleInterimExchangeDatesBusinessCenter');

function PaymentScheduleInterimExchangeDateBusinessCenterGrp (paymentScheduleInterimExchangeDateBusinessCenterGrp) {
  this.message = paymentScheduleInterimExchangeDateBusinessCenterGrp;
}

/* group */

/* field */
PaymentScheduleInterimExchangeDateBusinessCenterGrp.prototype.paymentScheduleInterimExchangeDatesBusinessCenter = function () {
  return new PaymentScheduleInterimExchangeDatesBusinessCenter(this.message.tags[PaymentScheduleInterimExchangeDatesBusinessCenter.Tag]);
};

/* end group */

PaymentScheduleInterimExchangeDateBusinessCenterGrp.Tag = '40945';

module.exports = PaymentScheduleInterimExchangeDateBusinessCenterGrp;