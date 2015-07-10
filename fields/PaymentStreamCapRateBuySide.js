var invert = require('invert-obj');

function PaymentStreamCapRateBuySide (paymentStreamCapRateBuySide) {
  this.message = paymentStreamCapRateBuySide;
}

PaymentStreamCapRateBuySide.prototype.value = function () {
  return this.message;
};


PaymentStreamCapRateBuySide.Keys = {
  BUYER_OF_THE_TRADE: '1',
  SELLER_OF_THE_TRADE: '2',
};

PaymentStreamCapRateBuySide.Tag = '40798';

PaymentStreamCapRateBuySide.Type = 'INT';

PaymentStreamCapRateBuySide.Values = invert(PaymentStreamCapRateBuySide.Keys);

module.exports = PaymentStreamCapRateBuySide;