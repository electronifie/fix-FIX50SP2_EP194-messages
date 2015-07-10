var invert = require('invert-obj');

function PaymentStubType (paymentStubType) {
  this.message = paymentStubType;
}

PaymentStubType.prototype.value = function () {
  return this.message;
};


PaymentStubType.Keys = {
  INITIAL: '0',
  FINAL: '1',
};

PaymentStubType.Tag = '40873';

PaymentStubType.Type = 'INT';

PaymentStubType.Values = invert(PaymentStubType.Keys);

module.exports = PaymentStubType;