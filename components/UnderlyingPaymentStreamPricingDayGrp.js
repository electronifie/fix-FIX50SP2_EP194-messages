var NoUnderlyingPaymentStreamPricingDays = require('../fields/NoUnderlyingPaymentStreamPricingDays');
var UnderlyingPaymentStreamPricingDayOfWeek = require('../fields/UnderlyingPaymentStreamPricingDayOfWeek');
var UnderlyingPaymentStreamPricingDayNumber = require('../fields/UnderlyingPaymentStreamPricingDayNumber');

function UnderlyingPaymentStreamPricingDayGrp (underlyingPaymentStreamPricingDayGrp) {
  this.message = underlyingPaymentStreamPricingDayGrp;
}

/* group */

/* field */
UnderlyingPaymentStreamPricingDayGrp.prototype.underlyingPaymentStreamPricingDayOfWeek = function () {
  return new UnderlyingPaymentStreamPricingDayOfWeek(this.message.tags[UnderlyingPaymentStreamPricingDayOfWeek.Tag]);
};

/* field */
UnderlyingPaymentStreamPricingDayGrp.prototype.underlyingPaymentStreamPricingDayNumber = function () {
  return new UnderlyingPaymentStreamPricingDayNumber(this.message.tags[UnderlyingPaymentStreamPricingDayNumber.Tag]);
};

/* end group */

UnderlyingPaymentStreamPricingDayGrp.Tag = '41944';

module.exports = UnderlyingPaymentStreamPricingDayGrp;