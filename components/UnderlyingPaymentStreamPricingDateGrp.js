var NoUnderlyingPaymentStreamPricingDates = require('../fields/NoUnderlyingPaymentStreamPricingDates');
var UnderlyingPaymentStreamPricingDate = require('../fields/UnderlyingPaymentStreamPricingDate');
var UnderlyingPaymentStreamPricingDateType = require('../fields/UnderlyingPaymentStreamPricingDateType');

function UnderlyingPaymentStreamPricingDateGrp (underlyingPaymentStreamPricingDateGrp) {
  this.message = underlyingPaymentStreamPricingDateGrp;
}

/* group */

/* field */
UnderlyingPaymentStreamPricingDateGrp.prototype.underlyingPaymentStreamPricingDate = function () {
  return new UnderlyingPaymentStreamPricingDate(this.message.tags[UnderlyingPaymentStreamPricingDate.Tag]);
};

/* field */
UnderlyingPaymentStreamPricingDateGrp.prototype.underlyingPaymentStreamPricingDateType = function () {
  return new UnderlyingPaymentStreamPricingDateType(this.message.tags[UnderlyingPaymentStreamPricingDateType.Tag]);
};

/* end group */

UnderlyingPaymentStreamPricingDateGrp.Tag = '41941';

module.exports = UnderlyingPaymentStreamPricingDateGrp;