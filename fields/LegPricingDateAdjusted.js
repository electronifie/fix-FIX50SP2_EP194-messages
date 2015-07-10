var invert = require('invert-obj');

function LegPricingDateAdjusted (legPricingDateAdjusted) {
  this.message = legPricingDateAdjusted;
}

LegPricingDateAdjusted.prototype.value = function () {
  return this.message;
};

LegPricingDateAdjusted.Tag = '41611';

LegPricingDateAdjusted.Type = 'LOCALMKTDATE';

module.exports = LegPricingDateAdjusted;