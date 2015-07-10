var invert = require('invert-obj');

function PricingTime (pricingTime) {
  this.message = pricingTime;
}

PricingTime.prototype.value = function () {
  return this.message;
};

PricingTime.Tag = '41235';

PricingTime.Type = 'LOCALMKTTIME';

module.exports = PricingTime;