var invert = require('invert-obj');

function UnderlyingPaymentStubIndexFloorRate (underlyingPaymentStubIndexFloorRate) {
  this.message = underlyingPaymentStubIndexFloorRate;
}

UnderlyingPaymentStubIndexFloorRate.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStubIndexFloorRate.Tag = '40725';

UnderlyingPaymentStubIndexFloorRate.Type = 'PERCENTAGE';

module.exports = UnderlyingPaymentStubIndexFloorRate;