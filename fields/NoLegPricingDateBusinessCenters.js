var invert = require('invert-obj');

function NoLegPricingDateBusinessCenters (noLegPricingDateBusinessCenters) {
  this.message = noLegPricingDateBusinessCenters;
}

NoLegPricingDateBusinessCenters.prototype.value = function () {
  return this.message;
};

NoLegPricingDateBusinessCenters.Tag = '41607';

NoLegPricingDateBusinessCenters.Type = 'NUMINGROUP';

module.exports = NoLegPricingDateBusinessCenters;