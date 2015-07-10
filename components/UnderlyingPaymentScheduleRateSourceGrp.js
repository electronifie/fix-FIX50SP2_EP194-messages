var NoUnderlyingPaymentScheduleRateSources = require('../fields/NoUnderlyingPaymentScheduleRateSources');
var UnderlyingPaymentScheduleRateSource = require('../fields/UnderlyingPaymentScheduleRateSource');
var UnderlyingPaymentScheduleRateSourceType = require('../fields/UnderlyingPaymentScheduleRateSourceType');
var UnderlyingPaymentScheduleReferencePage = require('../fields/UnderlyingPaymentScheduleReferencePage');

function UnderlyingPaymentScheduleRateSourceGrp (underlyingPaymentScheduleRateSourceGrp) {
  this.message = underlyingPaymentScheduleRateSourceGrp;
}

/* group */

/* field */
UnderlyingPaymentScheduleRateSourceGrp.prototype.underlyingPaymentScheduleRateSource = function () {
  return new UnderlyingPaymentScheduleRateSource(this.message.tags[UnderlyingPaymentScheduleRateSource.Tag]);
};

/* field */
UnderlyingPaymentScheduleRateSourceGrp.prototype.underlyingPaymentScheduleRateSourceType = function () {
  return new UnderlyingPaymentScheduleRateSourceType(this.message.tags[UnderlyingPaymentScheduleRateSourceType.Tag]);
};

/* field */
UnderlyingPaymentScheduleRateSourceGrp.prototype.underlyingPaymentScheduleReferencePage = function () {
  return new UnderlyingPaymentScheduleReferencePage(this.message.tags[UnderlyingPaymentScheduleReferencePage.Tag]);
};

/* end group */

UnderlyingPaymentScheduleRateSourceGrp.Tag = '40704';

module.exports = UnderlyingPaymentScheduleRateSourceGrp;