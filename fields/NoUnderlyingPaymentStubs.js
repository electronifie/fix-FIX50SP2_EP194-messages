var invert = require('invert-obj');

function NoUnderlyingPaymentStubs (noUnderlyingPaymentStubs) {
  this.message = noUnderlyingPaymentStubs;
}

NoUnderlyingPaymentStubs.prototype.value = function () {
  return this.message;
};

NoUnderlyingPaymentStubs.Tag = '40708';

NoUnderlyingPaymentStubs.Type = 'NUMINGROUP';

module.exports = NoUnderlyingPaymentStubs;