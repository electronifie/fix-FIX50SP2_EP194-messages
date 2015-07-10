var invert = require('invert-obj');

function UnderlyingPricingDateBusinessDayConvention (underlyingPricingDateBusinessDayConvention) {
  this.message = underlyingPricingDateBusinessDayConvention;
}

UnderlyingPricingDateBusinessDayConvention.prototype.value = function () {
  return this.message;
};

UnderlyingPricingDateBusinessDayConvention.Tag = '41950';

UnderlyingPricingDateBusinessDayConvention.Type = 'INT';

module.exports = UnderlyingPricingDateBusinessDayConvention;