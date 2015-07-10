var NoPaymentStreamNonDeliverableFixingDatesBusinessCenters = require('../fields/NoPaymentStreamNonDeliverableFixingDatesBusinessCenters');
var PaymentStreamNonDeliverableFixingDatesBusinessCenter = require('../fields/PaymentStreamNonDeliverableFixingDatesBusinessCenter');

function PaymentStreamNonDeliverableFixingDatesBusinessCenterGrp (paymentStreamNonDeliverableFixingDatesBusinessCenterGrp) {
  this.message = paymentStreamNonDeliverableFixingDatesBusinessCenterGrp;
}

/* group */

/* field */
PaymentStreamNonDeliverableFixingDatesBusinessCenterGrp.prototype.paymentStreamNonDeliverableFixingDatesBusinessCenter = function () {
  return new PaymentStreamNonDeliverableFixingDatesBusinessCenter(this.message.tags[PaymentStreamNonDeliverableFixingDatesBusinessCenter.Tag]);
};

/* end group */

PaymentStreamNonDeliverableFixingDatesBusinessCenterGrp.Tag = '40946';

module.exports = PaymentStreamNonDeliverableFixingDatesBusinessCenterGrp;