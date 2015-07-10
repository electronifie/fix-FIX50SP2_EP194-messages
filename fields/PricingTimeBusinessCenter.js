var invert = require('invert-obj');

function PricingTimeBusinessCenter (pricingTimeBusinessCenter) {
  this.message = pricingTimeBusinessCenter;
}

PricingTimeBusinessCenter.prototype.value = function () {
  return this.message;
};

PricingTimeBusinessCenter.Tag = '41236';

PricingTimeBusinessCenter.Type = 'STRING';

module.exports = PricingTimeBusinessCenter;