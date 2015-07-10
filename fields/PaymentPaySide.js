var invert = require('invert-obj');

function PaymentPaySide (paymentPaySide) {
  this.message = paymentPaySide;
}

PaymentPaySide.prototype.value = function () {
  return this.message;
};


PaymentPaySide.Keys = {
  BUY: '1',
  SELL: '2',
};

PaymentPaySide.Tag = '40214';

PaymentPaySide.Type = 'INT';

PaymentPaySide.Values = invert(PaymentPaySide.Keys);

module.exports = PaymentPaySide;