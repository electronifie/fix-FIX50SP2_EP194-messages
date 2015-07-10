var NoUnderlyingPaymentStreamNonDeliverableFixingDatesBusinessCenters = require('../fields/NoUnderlyingPaymentStreamNonDeliverableFixingDatesBusinessCenters');
var UnderlyingPaymentStreamNonDeliverableFixingDatesBusinessCenter = require('../fields/UnderlyingPaymentStreamNonDeliverableFixingDatesBusinessCenter');

function UnderlyingPaymentStreamNonDeliverableFixingDatesBusinessCenterGrp (underlyingPaymentStreamNonDeliverableFixingDatesBusinessCenterGrp) {
  this.message = underlyingPaymentStreamNonDeliverableFixingDatesBusinessCenterGrp;
}

/* group */

/* field */
UnderlyingPaymentStreamNonDeliverableFixingDatesBusinessCenterGrp.prototype.underlyingPaymentStreamNonDeliverableFixingDatesBusinessCenter = function () {
  return new UnderlyingPaymentStreamNonDeliverableFixingDatesBusinessCenter(this.message.tags[UnderlyingPaymentStreamNonDeliverableFixingDatesBusinessCenter.Tag]);
};

/* end group */

UnderlyingPaymentStreamNonDeliverableFixingDatesBusinessCenterGrp.Tag = '40968';

module.exports = UnderlyingPaymentStreamNonDeliverableFixingDatesBusinessCenterGrp;