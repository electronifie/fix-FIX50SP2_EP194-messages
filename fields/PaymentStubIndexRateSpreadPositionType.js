var invert = require('invert-obj');

function PaymentStubIndexRateSpreadPositionType (paymentStubIndexRateSpreadPositionType) {
  this.message = paymentStubIndexRateSpreadPositionType;
}

PaymentStubIndexRateSpreadPositionType.prototype.value = function () {
  return this.message;
};

PaymentStubIndexRateSpreadPositionType.Tag = '40884';

PaymentStubIndexRateSpreadPositionType.Type = 'INT';

module.exports = PaymentStubIndexRateSpreadPositionType;