var invert = require('invert-obj');

function NoPaymentSettls (noPaymentSettls) {
  this.message = noPaymentSettls;
}

NoPaymentSettls.prototype.value = function () {
  return this.message;
};

NoPaymentSettls.Tag = '40230';

NoPaymentSettls.Type = 'NUMINGROUP';

module.exports = NoPaymentSettls;