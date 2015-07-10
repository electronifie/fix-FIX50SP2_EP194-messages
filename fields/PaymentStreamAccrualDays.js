var invert = require('invert-obj');

function PaymentStreamAccrualDays (paymentStreamAccrualDays) {
  this.message = paymentStreamAccrualDays;
}

PaymentStreamAccrualDays.prototype.value = function () {
  return this.message;
};

PaymentStreamAccrualDays.Tag = '40743';

PaymentStreamAccrualDays.Type = 'INT';

module.exports = PaymentStreamAccrualDays;