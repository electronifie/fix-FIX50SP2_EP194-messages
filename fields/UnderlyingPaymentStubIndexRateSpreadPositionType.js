var invert = require('invert-obj');

function UnderlyingPaymentStubIndexRateSpreadPositionType (underlyingPaymentStubIndexRateSpreadPositionType) {
  this.message = underlyingPaymentStubIndexRateSpreadPositionType;
}

UnderlyingPaymentStubIndexRateSpreadPositionType.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStubIndexRateSpreadPositionType.Tag = '40720';

UnderlyingPaymentStubIndexRateSpreadPositionType.Type = 'INT';

module.exports = UnderlyingPaymentStubIndexRateSpreadPositionType;