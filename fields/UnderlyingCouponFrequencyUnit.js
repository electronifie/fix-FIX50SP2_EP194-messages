var invert = require('invert-obj');

function UnderlyingCouponFrequencyUnit (underlyingCouponFrequencyUnit) {
  this.message = underlyingCouponFrequencyUnit;
}

UnderlyingCouponFrequencyUnit.prototype.value = function () {
  return this.message;
};

UnderlyingCouponFrequencyUnit.Tag = '1992';

UnderlyingCouponFrequencyUnit.Type = 'STRING';

module.exports = UnderlyingCouponFrequencyUnit;