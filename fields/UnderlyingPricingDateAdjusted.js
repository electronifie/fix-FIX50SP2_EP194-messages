var invert = require('invert-obj');

function UnderlyingPricingDateAdjusted (underlyingPricingDateAdjusted) {
  this.message = underlyingPricingDateAdjusted;
}

UnderlyingPricingDateAdjusted.prototype.value = function () {
  return this.message;
};

UnderlyingPricingDateAdjusted.Tag = '41951';

UnderlyingPricingDateAdjusted.Type = 'LOCALMKTDATE';

module.exports = UnderlyingPricingDateAdjusted;