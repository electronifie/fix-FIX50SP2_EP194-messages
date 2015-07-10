var invert = require('invert-obj');

function LegPricingTimeBusinessCenter (legPricingTimeBusinessCenter) {
  this.message = legPricingTimeBusinessCenter;
}

LegPricingTimeBusinessCenter.prototype.value = function () {
  return this.message;
};

LegPricingTimeBusinessCenter.Tag = '41613';

LegPricingTimeBusinessCenter.Type = 'STRING';

module.exports = LegPricingTimeBusinessCenter;