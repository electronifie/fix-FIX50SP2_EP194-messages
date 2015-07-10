var invert = require('invert-obj');

function PaymentSubType (paymentSubType) {
  this.message = paymentSubType;
}

PaymentSubType.prototype.value = function () {
  return this.message;
};


PaymentSubType.Keys = {
  INITIAL: '0',
  INTERMEDIATE: '1',
  FINAL: '2',
  PREPAID: '3',
  POSTPAID: '4',
  VARIABLE: '5',
  FIXED: '6',
  SWAP: '7',
  CONDITIONAL: '8',
};

PaymentSubType.Tag = '40993';

PaymentSubType.Type = 'INT';

PaymentSubType.Values = invert(PaymentSubType.Keys);

module.exports = PaymentSubType;