var invert = require('invert-obj');

function NoUnderlyingPricingDateBusinessCenters (noUnderlyingPricingDateBusinessCenters) {
  this.message = noUnderlyingPricingDateBusinessCenters;
}

NoUnderlyingPricingDateBusinessCenters.prototype.value = function () {
  return this.message;
};

NoUnderlyingPricingDateBusinessCenters.Tag = '41947';

NoUnderlyingPricingDateBusinessCenters.Type = 'NUMINGROUP';

module.exports = NoUnderlyingPricingDateBusinessCenters;