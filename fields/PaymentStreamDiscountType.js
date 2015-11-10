var invert = require('invert-obj');

function PaymentStreamDiscountType (paymentStreamDiscountType) {
  this.message = paymentStreamDiscountType;
}

PaymentStreamDiscountType.prototype.value = function () {
  return this.message;
};


PaymentStreamDiscountType.Keys = {
  'STANDARD': '0',
  'FORWARD_RATE_AGREEMENT': '1',
};

PaymentStreamDiscountType.Tag = '40744';

PaymentStreamDiscountType.Type = 'INT';

PaymentStreamDiscountType.Values = invert(PaymentStreamDiscountType.Keys);

module.exports = PaymentStreamDiscountType;