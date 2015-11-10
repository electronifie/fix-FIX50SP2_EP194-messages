var invert = require('invert-obj');

function CouponFrequencyUnit (couponFrequencyUnit) {
  this.message = couponFrequencyUnit;
}

CouponFrequencyUnit.prototype.value = function () {
  return this.message;
};


CouponFrequencyUnit.Keys = {
  'DAY': 'D',
  'WEEK': 'Wk',
  'MONTH': 'Mo',
  'YEAR': 'Yr',
  'HOUR': 'H',
  'MINUTE': 'Min',
  'SECOND': 'S',
  'TERM': 'T',
};

CouponFrequencyUnit.Tag = '1949';

CouponFrequencyUnit.Type = 'STRING';

CouponFrequencyUnit.Values = invert(CouponFrequencyUnit.Keys);

module.exports = CouponFrequencyUnit;