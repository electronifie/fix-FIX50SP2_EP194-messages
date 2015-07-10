var NoLegPaymentStreamPricingBusinessCenters = require('../fields/NoLegPaymentStreamPricingBusinessCenters');
var LegPaymentStreamPricingBusinessCenter = require('../fields/LegPaymentStreamPricingBusinessCenter');

function LegPaymentStreamPricingBusinessCenterGrp (legPaymentStreamPricingBusinessCenterGrp) {
  this.message = legPaymentStreamPricingBusinessCenterGrp;
}

/* group */

/* field */
LegPaymentStreamPricingBusinessCenterGrp.prototype.legPaymentStreamPricingBusinessCenter = function () {
  return new LegPaymentStreamPricingBusinessCenter(this.message.tags[LegPaymentStreamPricingBusinessCenter.Tag]);
};

/* end group */

LegPaymentStreamPricingBusinessCenterGrp.Tag = '41561';

module.exports = LegPaymentStreamPricingBusinessCenterGrp;