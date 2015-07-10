var invert = require('invert-obj');

function PaymentStreamType (paymentStreamType) {
  this.message = paymentStreamType;
}

PaymentStreamType.prototype.value = function () {
  return this.message;
};


PaymentStreamType.Keys = {
  PERIODIC: '0',
  INITIAL: '1',
  SINGLE: '2',
};

PaymentStreamType.Tag = '40738';

PaymentStreamType.Type = 'INT';

PaymentStreamType.Values = invert(PaymentStreamType.Keys);

module.exports = PaymentStreamType;