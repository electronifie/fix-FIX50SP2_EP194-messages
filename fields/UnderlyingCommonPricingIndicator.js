var invert = require('invert-obj');

function UnderlyingCommonPricingIndicator (underlyingCommonPricingIndicator) {
  this.message = underlyingCommonPricingIndicator;
}

UnderlyingCommonPricingIndicator.prototype.value = function () {
  return this.message;
};

UnderlyingCommonPricingIndicator.Tag = '2296';

UnderlyingCommonPricingIndicator.Type = 'BOOLEAN';

module.exports = UnderlyingCommonPricingIndicator;