var invert = require('invert-obj');

function LegCommonPricingIndicator (legCommonPricingIndicator) {
  this.message = legCommonPricingIndicator;
}

LegCommonPricingIndicator.prototype.value = function () {
  return this.message;
};

LegCommonPricingIndicator.Tag = '2212';

LegCommonPricingIndicator.Type = 'BOOLEAN';

module.exports = LegCommonPricingIndicator;