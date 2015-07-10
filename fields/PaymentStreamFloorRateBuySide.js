var invert = require('invert-obj');

function PaymentStreamFloorRateBuySide (paymentStreamFloorRateBuySide) {
  this.message = paymentStreamFloorRateBuySide;
}

PaymentStreamFloorRateBuySide.prototype.value = function () {
  return this.message;
};


PaymentStreamFloorRateBuySide.Keys = {
  BUYER_OF_THE_TRADE: '1',
  SELLER_OF_THE_TRADE: '2',
};

PaymentStreamFloorRateBuySide.Tag = '40801';

PaymentStreamFloorRateBuySide.Type = 'INT';

PaymentStreamFloorRateBuySide.Values = invert(PaymentStreamFloorRateBuySide.Keys);

module.exports = PaymentStreamFloorRateBuySide;