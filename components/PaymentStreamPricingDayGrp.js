var NoPaymentStreamPricingDays = require('../fields/NoPaymentStreamPricingDays');
var PaymentStreamPricingDayOfWeek = require('../fields/PaymentStreamPricingDayOfWeek');
var PaymentStreamPricingDayNumber = require('../fields/PaymentStreamPricingDayNumber');

function PaymentStreamPricingDayGrp (paymentStreamPricingDayGrp) {
  this.message = paymentStreamPricingDayGrp;
}

/* group */

/* field */
PaymentStreamPricingDayGrp.prototype.paymentStreamPricingDayOfWeek = function () {
  return new PaymentStreamPricingDayOfWeek(this.message.tags[PaymentStreamPricingDayOfWeek.Tag]);
};

/* field */
PaymentStreamPricingDayGrp.prototype.paymentStreamPricingDayNumber = function () {
  return new PaymentStreamPricingDayNumber(this.message.tags[PaymentStreamPricingDayNumber.Tag]);
};

/* end group */

PaymentStreamPricingDayGrp.Tag = '41227';

module.exports = PaymentStreamPricingDayGrp;