var invert = require('invert-obj');

function UnderlyingPricingDateUnadjusted (underlyingPricingDateUnadjusted) {
  this.message = underlyingPricingDateUnadjusted;
}

UnderlyingPricingDateUnadjusted.prototype.value = function () {
  return this.message;
};

UnderlyingPricingDateUnadjusted.Tag = '41949';

UnderlyingPricingDateUnadjusted.Type = 'LOCALMKTDATE';

module.exports = UnderlyingPricingDateUnadjusted;