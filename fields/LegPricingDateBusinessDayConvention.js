var invert = require('invert-obj');

function LegPricingDateBusinessDayConvention (legPricingDateBusinessDayConvention) {
  this.message = legPricingDateBusinessDayConvention;
}

LegPricingDateBusinessDayConvention.prototype.value = function () {
  return this.message;
};

LegPricingDateBusinessDayConvention.Tag = '41610';

LegPricingDateBusinessDayConvention.Type = 'INT';

module.exports = LegPricingDateBusinessDayConvention;