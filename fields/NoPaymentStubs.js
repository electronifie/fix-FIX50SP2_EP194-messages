var invert = require('invert-obj');

function NoPaymentStubs (noPaymentStubs) {
  this.message = noPaymentStubs;
}

NoPaymentStubs.prototype.value = function () {
  return this.message;
};

NoPaymentStubs.Tag = '40872';

NoPaymentStubs.Type = 'NUMINGROUP';

module.exports = NoPaymentStubs;