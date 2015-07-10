var invert = require('invert-obj');

function UnderlyingPaymentStubIndex2RateSpreadPositionType (underlyingPaymentStubIndex2RateSpreadPositionType) {
  this.message = underlyingPaymentStubIndex2RateSpreadPositionType;
}

UnderlyingPaymentStubIndex2RateSpreadPositionType.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStubIndex2RateSpreadPositionType.Tag = '40734';

UnderlyingPaymentStubIndex2RateSpreadPositionType.Type = 'INT';

module.exports = UnderlyingPaymentStubIndex2RateSpreadPositionType;