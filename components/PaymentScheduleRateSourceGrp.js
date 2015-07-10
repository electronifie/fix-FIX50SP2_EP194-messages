var NoPaymentScheduleRateSources = require('../fields/NoPaymentScheduleRateSources');
var PaymentScheduleRateSource = require('../fields/PaymentScheduleRateSource');
var PaymentScheduleRateSourceType = require('../fields/PaymentScheduleRateSourceType');
var PaymentScheduleReferencePage = require('../fields/PaymentScheduleReferencePage');

function PaymentScheduleRateSourceGrp (paymentScheduleRateSourceGrp) {
  this.message = paymentScheduleRateSourceGrp;
}

/* group */

/* field */
PaymentScheduleRateSourceGrp.prototype.paymentScheduleRateSource = function () {
  return new PaymentScheduleRateSource(this.message.tags[PaymentScheduleRateSource.Tag]);
};

/* field */
PaymentScheduleRateSourceGrp.prototype.paymentScheduleRateSourceType = function () {
  return new PaymentScheduleRateSourceType(this.message.tags[PaymentScheduleRateSourceType.Tag]);
};

/* field */
PaymentScheduleRateSourceGrp.prototype.paymentScheduleReferencePage = function () {
  return new PaymentScheduleReferencePage(this.message.tags[PaymentScheduleReferencePage.Tag]);
};

/* end group */

PaymentScheduleRateSourceGrp.Tag = '40868';

module.exports = PaymentScheduleRateSourceGrp;