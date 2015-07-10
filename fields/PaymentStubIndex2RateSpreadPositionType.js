var invert = require('invert-obj');

function PaymentStubIndex2RateSpreadPositionType (paymentStubIndex2RateSpreadPositionType) {
  this.message = paymentStubIndex2RateSpreadPositionType;
}

PaymentStubIndex2RateSpreadPositionType.prototype.value = function () {
  return this.message;
};

PaymentStubIndex2RateSpreadPositionType.Tag = '40898';

PaymentStubIndex2RateSpreadPositionType.Type = 'INT';

module.exports = PaymentStubIndex2RateSpreadPositionType;