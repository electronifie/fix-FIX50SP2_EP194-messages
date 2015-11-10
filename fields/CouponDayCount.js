var invert = require('invert-obj');

function CouponDayCount (couponDayCount) {
  this.message = couponDayCount;
}

CouponDayCount.prototype.value = function () {
  return this.message;
};


CouponDayCount.Keys = {
  '_1_1': '0',
  '_30_360': '1',
  '_30_360_1': '2',
  '_30_360M': '3',
  '_30E_360': '4',
  '_30E_360_ISDA': '5',
  'ACT_360': '6',
  'ACT_365_FIXED': '7',
  'ACT_ACT_AFB': '8',
  'ACT_ACT_ICMA': '9',
  'ACT_ACT_ISMA_ULTIMO': '10',
  'ACT_ACT_ISDA': '11',
  'BUS_252': '12',
  '_30E_360_1': '13',
  'ACT_365L': '14',
  'NL365': '15',
  'NL360': '16',
};

CouponDayCount.Tag = '1950';

CouponDayCount.Type = 'INT';

CouponDayCount.Values = invert(CouponDayCount.Keys);

module.exports = CouponDayCount;