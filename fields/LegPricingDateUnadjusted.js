var invert = require('invert-obj');

function LegPricingDateUnadjusted (legPricingDateUnadjusted) {
  this.message = legPricingDateUnadjusted;
}

LegPricingDateUnadjusted.prototype.value = function () {
  return this.message;
};

LegPricingDateUnadjusted.Tag = '41609';

LegPricingDateUnadjusted.Type = 'LOCALMKTDATE';

module.exports = LegPricingDateUnadjusted;