var invert = require('invert-obj');

function PaymentStubLength (paymentStubLength) {
  this.message = paymentStubLength;
}

PaymentStubLength.prototype.value = function () {
  return this.message;
};


PaymentStubLength.Keys = {
  SHORT: '0',
  LONG: '1',
};

PaymentStubLength.Tag = '40874';

PaymentStubLength.Type = 'INT';

PaymentStubLength.Values = invert(PaymentStubLength.Keys);

module.exports = PaymentStubLength;