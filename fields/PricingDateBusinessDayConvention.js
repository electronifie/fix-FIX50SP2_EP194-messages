var invert = require('invert-obj');

function PricingDateBusinessDayConvention (pricingDateBusinessDayConvention) {
  this.message = pricingDateBusinessDayConvention;
}

PricingDateBusinessDayConvention.prototype.value = function () {
  return this.message;
};

PricingDateBusinessDayConvention.Tag = '41233';

PricingDateBusinessDayConvention.Type = 'INT';

module.exports = PricingDateBusinessDayConvention;