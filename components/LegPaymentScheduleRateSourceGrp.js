var NoLegPaymentScheduleRateSources = require('../fields/NoLegPaymentScheduleRateSources');
var LegPaymentScheduleRateSource = require('../fields/LegPaymentScheduleRateSource');
var LegPaymentScheduleRateSourceType = require('../fields/LegPaymentScheduleRateSourceType');
var LegPaymentScheduleReferencePage = require('../fields/LegPaymentScheduleReferencePage');

function LegPaymentScheduleRateSourceGrp (legPaymentScheduleRateSourceGrp) {
  this.message = legPaymentScheduleRateSourceGrp;
}

/* group */

/* field */
LegPaymentScheduleRateSourceGrp.prototype.legPaymentScheduleRateSource = function () {
  return new LegPaymentScheduleRateSource(this.message.tags[LegPaymentScheduleRateSource.Tag]);
};

/* field */
LegPaymentScheduleRateSourceGrp.prototype.legPaymentScheduleRateSourceType = function () {
  return new LegPaymentScheduleRateSourceType(this.message.tags[LegPaymentScheduleRateSourceType.Tag]);
};

/* field */
LegPaymentScheduleRateSourceGrp.prototype.legPaymentScheduleReferencePage = function () {
  return new LegPaymentScheduleReferencePage(this.message.tags[LegPaymentScheduleReferencePage.Tag]);
};

/* end group */

LegPaymentScheduleRateSourceGrp.Tag = '40414';

module.exports = LegPaymentScheduleRateSourceGrp;