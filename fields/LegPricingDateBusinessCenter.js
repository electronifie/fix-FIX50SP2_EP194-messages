var invert = require('invert-obj');

function LegPricingDateBusinessCenter (legPricingDateBusinessCenter) {
  this.message = legPricingDateBusinessCenter;
}

LegPricingDateBusinessCenter.prototype.value = function () {
  return this.message;
};

LegPricingDateBusinessCenter.Tag = '41608';

LegPricingDateBusinessCenter.Type = 'STRING';

module.exports = LegPricingDateBusinessCenter;