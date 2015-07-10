var invert = require('invert-obj');

function NoPricingDateBusinessCenters (noPricingDateBusinessCenters) {
  this.message = noPricingDateBusinessCenters;
}

NoPricingDateBusinessCenters.prototype.value = function () {
  return this.message;
};

NoPricingDateBusinessCenters.Tag = '41230';

NoPricingDateBusinessCenters.Type = 'NUMINGROUP';

module.exports = NoPricingDateBusinessCenters;