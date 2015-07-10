var NoLegPaymentStreamNonDeliverableFixingDateBusinessCenters = require('../fields/NoLegPaymentStreamNonDeliverableFixingDateBusinessCenters');
var LegPaymentStreamNonDeliverableFixingDatesBusinessCenter = require('../fields/LegPaymentStreamNonDeliverableFixingDatesBusinessCenter');

function LegPaymentStreamNonDeliverableFixingDatesBusinessCenterGrp (legPaymentStreamNonDeliverableFixingDatesBusinessCenterGrp) {
  this.message = legPaymentStreamNonDeliverableFixingDatesBusinessCenterGrp;
}

/* group */

/* field */
LegPaymentStreamNonDeliverableFixingDatesBusinessCenterGrp.prototype.legPaymentStreamNonDeliverableFixingDatesBusinessCenter = function () {
  return new LegPaymentStreamNonDeliverableFixingDatesBusinessCenter(this.message.tags[LegPaymentStreamNonDeliverableFixingDatesBusinessCenter.Tag]);
};

/* end group */

LegPaymentStreamNonDeliverableFixingDatesBusinessCenterGrp.Tag = '40929';

module.exports = LegPaymentStreamNonDeliverableFixingDatesBusinessCenterGrp;