var invert = require('invert-obj');

function PricingDateBusinessCenter (pricingDateBusinessCenter) {
  this.message = pricingDateBusinessCenter;
}

PricingDateBusinessCenter.prototype.value = function () {
  return this.message;
};

PricingDateBusinessCenter.Tag = '41231';

PricingDateBusinessCenter.Type = 'STRING';

module.exports = PricingDateBusinessCenter;