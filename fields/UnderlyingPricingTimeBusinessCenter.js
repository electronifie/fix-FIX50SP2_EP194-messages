var invert = require('invert-obj');

function UnderlyingPricingTimeBusinessCenter (underlyingPricingTimeBusinessCenter) {
  this.message = underlyingPricingTimeBusinessCenter;
}

UnderlyingPricingTimeBusinessCenter.prototype.value = function () {
  return this.message;
};

UnderlyingPricingTimeBusinessCenter.Tag = '41953';

UnderlyingPricingTimeBusinessCenter.Type = 'STRING';

module.exports = UnderlyingPricingTimeBusinessCenter;