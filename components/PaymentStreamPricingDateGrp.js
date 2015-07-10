var NoPaymentStreamPricingDates = require('../fields/NoPaymentStreamPricingDates');
var PaymentStreamPricingDate = require('../fields/PaymentStreamPricingDate');
var PaymentStreamPricingDateType = require('../fields/PaymentStreamPricingDateType');

function PaymentStreamPricingDateGrp (paymentStreamPricingDateGrp) {
  this.message = paymentStreamPricingDateGrp;
}

/* group */

/* field */
PaymentStreamPricingDateGrp.prototype.paymentStreamPricingDate = function () {
  return new PaymentStreamPricingDate(this.message.tags[PaymentStreamPricingDate.Tag]);
};

/* field */
PaymentStreamPricingDateGrp.prototype.paymentStreamPricingDateType = function () {
  return new PaymentStreamPricingDateType(this.message.tags[PaymentStreamPricingDateType.Tag]);
};

/* end group */

PaymentStreamPricingDateGrp.Tag = '41224';

module.exports = PaymentStreamPricingDateGrp;