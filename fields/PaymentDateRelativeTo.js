var invert = require('invert-obj');

function PaymentDateRelativeTo (paymentDateRelativeTo) {
  this.message = paymentDateRelativeTo;
}

PaymentDateRelativeTo.prototype.value = function () {
  return this.message;
};


PaymentDateRelativeTo.Keys = {
  'TRADE_DATE': '0',
  'SETTLEMENT_DATE': '1',
  'EFFECTIVE_DATE': '2',
};

PaymentDateRelativeTo.Tag = '41156';

PaymentDateRelativeTo.Type = 'INT';

PaymentDateRelativeTo.Values = invert(PaymentDateRelativeTo.Keys);

module.exports = PaymentDateRelativeTo;