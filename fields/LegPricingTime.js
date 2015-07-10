var invert = require('invert-obj');

function LegPricingTime (legPricingTime) {
  this.message = legPricingTime;
}

LegPricingTime.prototype.value = function () {
  return this.message;
};

LegPricingTime.Tag = '41612';

LegPricingTime.Type = 'LOCALMKTTIME';

module.exports = LegPricingTime;