var invert = require('invert-obj');

function PaymentStreamPricingDayDistribution (paymentStreamPricingDayDistribution) {
  this.message = paymentStreamPricingDayDistribution;
}

PaymentStreamPricingDayDistribution.prototype.value = function () {
  return this.message;
};


PaymentStreamPricingDayDistribution.Keys = {
  ALL: '0',
  FIRST: '1',
  LAST: '2',
  PENULTIMATE: '3',
};

PaymentStreamPricingDayDistribution.Tag = '41214';

PaymentStreamPricingDayDistribution.Type = 'INT';

PaymentStreamPricingDayDistribution.Values = invert(PaymentStreamPricingDayDistribution.Keys);

module.exports = PaymentStreamPricingDayDistribution;