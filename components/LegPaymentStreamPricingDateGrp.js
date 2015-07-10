var NoLegPaymentStreamPricingDates = require('../fields/NoLegPaymentStreamPricingDates');
var LegPaymentStreamPricingDate = require('../fields/LegPaymentStreamPricingDate');
var LegPaymentStreamPricingDateType = require('../fields/LegPaymentStreamPricingDateType');

function LegPaymentStreamPricingDateGrp (legPaymentStreamPricingDateGrp) {
  this.message = legPaymentStreamPricingDateGrp;
}

/* group */

/* field */
LegPaymentStreamPricingDateGrp.prototype.legPaymentStreamPricingDate = function () {
  return new LegPaymentStreamPricingDate(this.message.tags[LegPaymentStreamPricingDate.Tag]);
};

/* field */
LegPaymentStreamPricingDateGrp.prototype.legPaymentStreamPricingDateType = function () {
  return new LegPaymentStreamPricingDateType(this.message.tags[LegPaymentStreamPricingDateType.Tag]);
};

/* end group */

LegPaymentStreamPricingDateGrp.Tag = '41593';

module.exports = LegPaymentStreamPricingDateGrp;