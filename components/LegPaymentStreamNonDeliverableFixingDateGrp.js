var NoLegNonDeliverableFixingDates = require('../fields/NoLegNonDeliverableFixingDates');
var LegNonDeliverableFixingDate = require('../fields/LegNonDeliverableFixingDate');
var LegNonDeliverableFixingDateType = require('../fields/LegNonDeliverableFixingDateType');

function LegPaymentStreamNonDeliverableFixingDateGrp (legPaymentStreamNonDeliverableFixingDateGrp) {
  this.message = legPaymentStreamNonDeliverableFixingDateGrp;
}

/* group */

/* field */
LegPaymentStreamNonDeliverableFixingDateGrp.prototype.legNonDeliverableFixingDate = function () {
  return new LegNonDeliverableFixingDate(this.message.tags[LegNonDeliverableFixingDate.Tag]);
};

/* field */
LegPaymentStreamNonDeliverableFixingDateGrp.prototype.legNonDeliverableFixingDateType = function () {
  return new LegNonDeliverableFixingDateType(this.message.tags[LegNonDeliverableFixingDateType.Tag]);
};

/* end group */

LegPaymentStreamNonDeliverableFixingDateGrp.Tag = '40367';

module.exports = LegPaymentStreamNonDeliverableFixingDateGrp;