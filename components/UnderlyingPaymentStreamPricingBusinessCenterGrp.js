var NoUnderlyingPaymentStreamPricingBusinessCenters = require('../fields/NoUnderlyingPaymentStreamPricingBusinessCenters');
var UnderlyingPaymentStreamPricingBusinessCenter = require('../fields/UnderlyingPaymentStreamPricingBusinessCenter');

function UnderlyingPaymentStreamPricingBusinessCenterGrp (underlyingPaymentStreamPricingBusinessCenterGrp) {
  this.message = underlyingPaymentStreamPricingBusinessCenterGrp;
}

/* group */

/* field */
UnderlyingPaymentStreamPricingBusinessCenterGrp.prototype.underlyingPaymentStreamPricingBusinessCenter = function () {
  return new UnderlyingPaymentStreamPricingBusinessCenter(this.message.tags[UnderlyingPaymentStreamPricingBusinessCenter.Tag]);
};

/* end group */

UnderlyingPaymentStreamPricingBusinessCenterGrp.Tag = '41909';

module.exports = UnderlyingPaymentStreamPricingBusinessCenterGrp;