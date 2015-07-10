var invert = require('invert-obj');

function CommonPricingIndicator (commonPricingIndicator) {
  this.message = commonPricingIndicator;
}

CommonPricingIndicator.prototype.value = function () {
  return this.message;
};

CommonPricingIndicator.Tag = '2142';

CommonPricingIndicator.Type = 'BOOLEAN';

module.exports = CommonPricingIndicator;