var invert = require('invert-obj');

function UnderlyingPricingDateBusinessCenter (underlyingPricingDateBusinessCenter) {
  this.message = underlyingPricingDateBusinessCenter;
}

UnderlyingPricingDateBusinessCenter.prototype.value = function () {
  return this.message;
};

UnderlyingPricingDateBusinessCenter.Tag = '41948';

UnderlyingPricingDateBusinessCenter.Type = 'STRING';

module.exports = UnderlyingPricingDateBusinessCenter;