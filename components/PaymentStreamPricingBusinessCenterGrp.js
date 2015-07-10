var NoPaymentStreamPricingBusinessCenters = require('../fields/NoPaymentStreamPricingBusinessCenters');
var PaymentStreamPricingBusinessCenter = require('../fields/PaymentStreamPricingBusinessCenter');

function PaymentStreamPricingBusinessCenterGrp (paymentStreamPricingBusinessCenterGrp) {
  this.message = paymentStreamPricingBusinessCenterGrp;
}

/* group */

/* field */
PaymentStreamPricingBusinessCenterGrp.prototype.paymentStreamPricingBusinessCenter = function () {
  return new PaymentStreamPricingBusinessCenter(this.message.tags[PaymentStreamPricingBusinessCenter.Tag]);
};

/* end group */

PaymentStreamPricingBusinessCenterGrp.Tag = '41192';

module.exports = PaymentStreamPricingBusinessCenterGrp;