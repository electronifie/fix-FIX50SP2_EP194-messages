var NoLegPaymentStreamPricingDays = require('../fields/NoLegPaymentStreamPricingDays');
var LegPaymentStreamPricingDayOfWeek = require('../fields/LegPaymentStreamPricingDayOfWeek');
var LegPaymentStreamPricingDayNumber = require('../fields/LegPaymentStreamPricingDayNumber');

function LegPaymentStreamPricingDayGrp (legPaymentStreamPricingDayGrp) {
  this.message = legPaymentStreamPricingDayGrp;
}

/* group */

/* field */
LegPaymentStreamPricingDayGrp.prototype.legPaymentStreamPricingDayOfWeek = function () {
  return new LegPaymentStreamPricingDayOfWeek(this.message.tags[LegPaymentStreamPricingDayOfWeek.Tag]);
};

/* field */
LegPaymentStreamPricingDayGrp.prototype.legPaymentStreamPricingDayNumber = function () {
  return new LegPaymentStreamPricingDayNumber(this.message.tags[LegPaymentStreamPricingDayNumber.Tag]);
};

/* end group */

LegPaymentStreamPricingDayGrp.Tag = '41596';

module.exports = LegPaymentStreamPricingDayGrp;