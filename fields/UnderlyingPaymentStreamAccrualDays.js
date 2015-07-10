var invert = require('invert-obj');

function UnderlyingPaymentStreamAccrualDays (underlyingPaymentStreamAccrualDays) {
  this.message = underlyingPaymentStreamAccrualDays;
}

UnderlyingPaymentStreamAccrualDays.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamAccrualDays.Tag = '40573';

UnderlyingPaymentStreamAccrualDays.Type = 'INT';

module.exports = UnderlyingPaymentStreamAccrualDays;