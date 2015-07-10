var invert = require('invert-obj');

function NoPaymentSchedules (noPaymentSchedules) {
  this.message = noPaymentSchedules;
}

NoPaymentSchedules.prototype.value = function () {
  return this.message;
};

NoPaymentSchedules.Tag = '40828';

NoPaymentSchedules.Type = 'NUMINGROUP';

module.exports = NoPaymentSchedules;