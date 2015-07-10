var invert = require('invert-obj');

function NoUnderlyingPaymentSchedules (noUnderlyingPaymentSchedules) {
  this.message = noUnderlyingPaymentSchedules;
}

NoUnderlyingPaymentSchedules.prototype.value = function () {
  return this.message;
};

NoUnderlyingPaymentSchedules.Tag = '40664';

NoUnderlyingPaymentSchedules.Type = 'NUMINGROUP';

module.exports = NoUnderlyingPaymentSchedules;