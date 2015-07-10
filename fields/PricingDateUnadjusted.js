var invert = require('invert-obj');

function PricingDateUnadjusted (pricingDateUnadjusted) {
  this.message = pricingDateUnadjusted;
}

PricingDateUnadjusted.prototype.value = function () {
  return this.message;
};

PricingDateUnadjusted.Tag = '41232';

PricingDateUnadjusted.Type = 'LOCALMKTDATE';

module.exports = PricingDateUnadjusted;