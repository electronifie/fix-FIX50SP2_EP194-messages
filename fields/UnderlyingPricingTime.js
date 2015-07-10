var invert = require('invert-obj');

function UnderlyingPricingTime (underlyingPricingTime) {
  this.message = underlyingPricingTime;
}

UnderlyingPricingTime.prototype.value = function () {
  return this.message;
};

UnderlyingPricingTime.Tag = '41952';

UnderlyingPricingTime.Type = 'LOCALMKTTIME';

module.exports = UnderlyingPricingTime;