var invert = require('invert-obj');

function UnderlyingPaymentStreamDiscountType (underlyingPaymentStreamDiscountType) {
  this.message = underlyingPaymentStreamDiscountType;
}

UnderlyingPaymentStreamDiscountType.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamDiscountType.Tag = '40574';

UnderlyingPaymentStreamDiscountType.Type = 'INT';

module.exports = UnderlyingPaymentStreamDiscountType;