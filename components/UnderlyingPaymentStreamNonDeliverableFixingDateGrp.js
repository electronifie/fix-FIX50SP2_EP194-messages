var NoUnderlyingNonDeliverableFixingDates = require('../fields/NoUnderlyingNonDeliverableFixingDates');
var UnderlyingNonDeliverableFixingDate = require('../fields/UnderlyingNonDeliverableFixingDate');
var UnderlyingNonDeliverableFixingDateType = require('../fields/UnderlyingNonDeliverableFixingDateType');

function UnderlyingPaymentStreamNonDeliverableFixingDateGrp (underlyingPaymentStreamNonDeliverableFixingDateGrp) {
  this.message = underlyingPaymentStreamNonDeliverableFixingDateGrp;
}

/* group */

/* field */
UnderlyingPaymentStreamNonDeliverableFixingDateGrp.prototype.underlyingNonDeliverableFixingDate = function () {
  return new UnderlyingNonDeliverableFixingDate(this.message.tags[UnderlyingNonDeliverableFixingDate.Tag]);
};

/* field */
UnderlyingPaymentStreamNonDeliverableFixingDateGrp.prototype.underlyingNonDeliverableFixingDateType = function () {
  return new UnderlyingNonDeliverableFixingDateType(this.message.tags[UnderlyingNonDeliverableFixingDateType.Tag]);
};

/* end group */

UnderlyingPaymentStreamNonDeliverableFixingDateGrp.Tag = '40656';

module.exports = UnderlyingPaymentStreamNonDeliverableFixingDateGrp;