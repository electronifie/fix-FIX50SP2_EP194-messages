var invert = require('invert-obj');

function PricingDateAdjusted (pricingDateAdjusted) {
  this.message = pricingDateAdjusted;
}

PricingDateAdjusted.prototype.value = function () {
  return this.message;
};

PricingDateAdjusted.Tag = '41234';

PricingDateAdjusted.Type = 'LOCALMKTDATE';

module.exports = PricingDateAdjusted;