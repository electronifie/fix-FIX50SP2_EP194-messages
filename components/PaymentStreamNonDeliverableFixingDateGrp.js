var NoNonDeliverableFixingDates = require('../fields/NoNonDeliverableFixingDates');
var NonDeliverableFixingDate = require('../fields/NonDeliverableFixingDate');
var NonDeliverableFixingDateType = require('../fields/NonDeliverableFixingDateType');

function PaymentStreamNonDeliverableFixingDateGrp (paymentStreamNonDeliverableFixingDateGrp) {
  this.message = paymentStreamNonDeliverableFixingDateGrp;
}

/* group */

/* field */
PaymentStreamNonDeliverableFixingDateGrp.prototype.nonDeliverableFixingDate = function () {
  return new NonDeliverableFixingDate(this.message.tags[NonDeliverableFixingDate.Tag]);
};

/* field */
PaymentStreamNonDeliverableFixingDateGrp.prototype.nonDeliverableFixingDateType = function () {
  return new NonDeliverableFixingDateType(this.message.tags[NonDeliverableFixingDateType.Tag]);
};

/* end group */

PaymentStreamNonDeliverableFixingDateGrp.Tag = '40825';

module.exports = PaymentStreamNonDeliverableFixingDateGrp;