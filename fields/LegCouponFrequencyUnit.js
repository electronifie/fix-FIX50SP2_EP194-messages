var invert = require('invert-obj');

function LegCouponFrequencyUnit (legCouponFrequencyUnit) {
  this.message = legCouponFrequencyUnit;
}

LegCouponFrequencyUnit.prototype.value = function () {
  return this.message;
};

LegCouponFrequencyUnit.Tag = '2164';

LegCouponFrequencyUnit.Type = 'STRING';

module.exports = LegCouponFrequencyUnit;