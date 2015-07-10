var invert = require('invert-obj');

function NoPayments (noPayments) {
  this.message = noPayments;
}

NoPayments.prototype.value = function () {
  return this.message;
};

NoPayments.Tag = '40212';

NoPayments.Type = 'NUMINGROUP';

module.exports = NoPayments;